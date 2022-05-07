const path = require('path') ;
module.exports = async ({ config }) => {
    // styles
    config.module.rules.push({
        test: /\. (sass|sess)$/,
        use: ['resolve-url-loader'],
        include: path.resolve(__dirname, '../')
    });
    // fonts
    config.module.rules.push({
        test: /\. (png|woff|woff2|eot|ttf|svg)$/,
        use: [
            {
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]',
                }
            }
        ],
        include: path.resolve(__dirname, '../')
    });

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],        
    })

    return config
};