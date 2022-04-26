if Rails.env === "production"
  Rails.application.config.session_store :cookie_store, key: "_my-square", domain: "my-square-json-api"
else
  Rails.application.config.session_store :cookie_store, key: "_my-square"
end
