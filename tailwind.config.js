module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.jsx',
    './app/javascript/**/*.js',
  ],
  plugins: [
    require('daisyui')
  ]
}
