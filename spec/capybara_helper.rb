require 'capybara/session'
require_relative 'selenium_helper'

Capybara.default_driver = :selenium_chrome
Capybara.app_host = 'https://jakelamothe.com'
Capybara.run_server = false
Capybara.default_max_wait_time = 15
Capybara.javascript_driver = ENV.fetch('CAPYBARA_JAVASCRIPT_DRIVER', :selenium_chrome).to_sym
Capybara.server = :webrick, { Silent: true }
