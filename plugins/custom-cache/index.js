const util = require('util')
const fs = require('fs')

const readFileAsync = util.promisify(fs.readFile)
/*
`./links` is the root of the React App (called "links")
`./blog` is the root of the Jekyll blog
*/

const appDigestPath = './links/package.json'
const appCachePath = './links/node_modules'

/*
Decided to use the executable `node_modules/react-scripts/bin/react-scripts.js` instead
of `node_modules/.bin/react-scripts`
*/
// const appCacheBinPath = './app/node_modules/.bin' 

const blogDigestPath = './blog/Gemfile.lock'
const blogCachePath = './blog/vendor/bundle'

module.exports = {
    async onPreBuild({ utils: { cache } }) {

        // React App
        const newAppDigestData = await readFileAsync(appDigestPath, 'utf8')

        // Restore old app digest
        const restoreAppDigestSuccess = await cache.restore(appDigestPath)
        if (restoreAppDigestSuccess) {
            const oldAppDigestData = await readFileAsync(appDigestPath, 'utf8')
            if (newAppDigestData === oldAppDigestData) {
                // Digest did not change. Attempt restore of cache
                const restoreAppCacheSuccess = await cache.restore(appCachePath)
                // && await cache.restore(appCacheBinPath) 
                if (restoreAppCacheSuccess) {
                    console.log('restore success for app cache')
                } else {
                    console.log('restore failed for app cache')
                }
            } else {
                console.log('digest change detected for app, not restoring cache')
            }
        } else {
            console.log('restore failed for app digest')
        }

        // BLOG
        const newBlogDigestData = await readFileAsync(blogDigestPath, 'utf8')

        // Restore old blog digest
        const restoreBlogDigestSuccess = await cache.restore(blogDigestPath)
        if (restoreBlogDigestSuccess) {
            const oldBlogDigestData = await readFileAsync(blogDigestPath, 'utf8')
            if (newBlogDigestData === oldBlogDigestData) {
                // Digest did not change. Attempt restore of cache
                const restoreBlogCacheSuccess = await cache.restore(blogCachePath)
                if (restoreBlogCacheSuccess) {
                    console.log('restore success for blog cache!')
                } else {
                    console.log('restore failed for blog cache')
                }
            } else {
                console.log('digest change detected for blog, not restoring cache')
            }
        } else {
            console.log('restore failed for blog digest')
        }


    },

    async onPostBuild({ utils }) {
        // app
        const saveAppDigestSuccess = await utils.cache.save(appDigestPath)
        if (saveAppDigestSuccess) {
            console.log('cache success for app digest')
        }
        const saveAppCacheSuccess = await utils.cache.save(appCachePath, { digests: [appDigestPath] })
        // && await utils.cache.save(appCacheBinPath, { digests: [appDigestPath] })
        if (saveAppCacheSuccess) {
            console.log('cache success for app cache')
        }

        // Jekyll
        const saveBlogDigestSuccess = await utils.cache.save(blogDigestPath)
        if (saveBlogDigestSuccess) {
            console.log('cache success for blog digest')
        }
        const saveBlogCacheSuccess = await utils.cache.save(blogCachePath, { digests: [blogDigestPath] })
        if (saveBlogCacheSuccess) {
            console.log('cache success for blog cache')
        }
    }
}