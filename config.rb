# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# set :css_dir, 'stylesheets'
# set :js_dir, 'javascripts'
# set :images_dir, 'images'

activate :livereload

activate :external_pipeline,
  name: :webpack,
  command: build? ? "yarn run build" : "yarn run start",
  source: '.tmp/dist',
  latency: 1

# Asset pipeline directory path for js and css based on webpack.config.js

config[:js_dir] = '/assets/javascripts'
config[:css_dir] = '/assets/stylesheets'
config[:images_dir] = '/images'

# config[:fonts_dir] = 'assets/fonts'
# set :fonts_dir, '/assets/fonts'

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
