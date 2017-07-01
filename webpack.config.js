module.exports = {
entry: './public/App/app.jsx',
output: {
    path: __dirname,
    filename: './public/bundle.js'
},

module:{
loaders:[{
    loader: 'babel-loader',
    query: {
        presets:['react','es2015']
    },
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/
    }
    ]
},
resolve: {
    root: __dirname,
    alias: {
        Weather: 'public/app/Weathercomponent/Weather.jsx',
        WeatherData: 'public/app/Weathercomponent/WeatherData.jsx',
        WeatherForm: 'public/app/Weathercomponent/WeatherForm.jsx',
        OpenWeatherMap: 'public/app/APICall/OpenWeatherMap.jsx',

        Aboutus: 'public/app/Component/Aboutus.jsx',
        Services: 'public/app/Component/Services.jsx',
        WeatherNew: 'public/app/Component/Weather.jsx',
        Locators: 'public/app/Component/Locators.jsx',
        Main: 'public/app/Component/Main.jsx',
        Navbar: 'public/app/Component/Navbar.jsx'
    },
    extensions: ['','.js','.jsx']
}
};