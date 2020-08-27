# Example file structure at root
# .
# ├── blog (Jekyll blog)
# ├── build.sh (build script)
# ├── links (React app)
# ├── netlify.toml (netlify config)
# ├── plugins (netlify plugins)
# └── public (folder served with a static homepage)

# Build the React App
cd links
# Install packages
npm install
# Run build script
./node_modules/react-scripts/bin/react-scripts.js build

# Move the React App into the public folder
rm -rf ../public/links
mv build ../public/links
cd ..

# Build Jekyll blog
cd blog
bundle config set path 'vendor/bundle'
bundle install
bundle exec jekyll build

# Move the blog into the public folder
rm -rf ../public/blog
mv _site ../public/blog/