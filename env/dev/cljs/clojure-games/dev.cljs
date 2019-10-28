(ns ^:figwheel-no-load clojure-games.dev
  (:require
    [clojure-games.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
