(ns clojure_games.core
  (:require
    [reagent.core :as r]
    [re-frame.core :as rf]))

;; -------------------------
;;db

(rf/reg-event-db
  :move-water
  (fn [db [_ from-id to-id]]
    (if (= from-id to-id)
      (-> db
          (assoc :from-id nil)
          (assoc :to-id nil))
      (let [from-water  (get (:water db) from-id)
            to-water    (get (:water db) to-id)
            space-in-to (- to-id to-water)
            moving      (if (> from-water space-in-to)
                          space-in-to
                          from-water)]
        (-> db
            (assoc-in [:water from-id] (- from-water moving))
            (assoc-in [:water to-id] (+ to-water moving))
            (assoc :from-id nil)
            (assoc :to-id nil))))))

(rf/reg-event-db
  :init-water
  (fn [db _]
    (-> db
        (assoc-in [:water 3] 0)
        (assoc-in [:water 5] 0)
        (assoc-in [:water 8] 8))))

(rf/reg-sub
  :get-water-at-id
  (fn [db [_ id]]
    (get (:water db) id)))

(rf/reg-event-db
  :select-from
  (fn [db [_ from-id]]
    (assoc db :from-id from-id)))

(rf/reg-sub
  :get-from
  (fn [db _]
    (:from-id db)))

(rf/reg-event-db
  :select-to
  (fn [db [_ to-id]]
    (assoc db :to-id to-id)))

(rf/reg-sub
  :get-to
  (fn [db _]
    (:to-id db)))

(defn select-jar [event id]
  (.stopPropagation event)
  (let [from @(rf/subscribe [:get-from])]
    (if from
      (rf/dispatch [:move-water from id])
      (rf/dispatch [:select-from id]))))

(defn get-style [id]
  (let [from @(rf/subscribe [:get-from])]
    (when (= id from)
      {:border        "3px solid pink"
       :border-radius "50%"})))

;; Views

(defn litre-of-water [id water]
  [:div.water
   {:key   id
    :style (if (< id water) {:background "lightblue"})}])

(defn jug [id]
  (let [water @(rf/subscribe [:get-water-at-id id])]
    [:div.jug
     {:on-click (fn [e]
                  (select-jar e id))}
     [:div.jug-info
      {:style (get-style id)}
      (str water) "/" id]
     [:div.waters
      (for [w (reverse (range id))]
        (litre-of-water w water))]]))

(defn reset-clicks []
  (rf/dispatch [:select-to nil])
  (rf/dispatch [:select-from nil]))

(defn home-page []
  [:div
   {:on-click #(reset-clicks)}
   [:h2 "3 Jugs puzzle"]
   (let [water-at-5 @(rf/subscribe [:get-water-at-id 5])
         water-at-8 @(rf/subscribe [:get-water-at-id 8])]
     (if (or (= 4 water-at-5) (= 4 water-at-8))
       [:div.win-screen
        [:span.blinking "Congratulations! You won!"]
        [:img {:src "https://media.giphy.com/media/yz76Da5VvYK4w/giphy.gif"}]]
       [:div
        [:p.game-intro "There are three glasses on the table - 3, 5, and 8 oz. The first two are empty,
        the last contains 8 oz of water. By pouring water from one glass to another make at
        least one of them contain exactly 4 oz of water"]
        [:div#jugs-container
         [jug 3]
         [jug 5]
         [jug 8]]]))])

;; -------------------------
;; Initialize app

(defn mount-root []
  (rf/dispatch [:init-water])
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
