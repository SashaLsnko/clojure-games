(ns clojure-games.prod
  (:require
    [clojure-games.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
