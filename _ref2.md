# netlify error
```shell
11:42:30 AM: Build ready to start
11:42:33 AM: build-image version: 9cade8af58c2cf3a17a1e9433d2e979149488837
11:42:33 AM: build-image tag: v3.3.5
11:42:33 AM: buildbot version: 2fd8f04962d5dbc77b79b9c2f5ab7a077e87376b
11:42:33 AM: Fetching cached dependencies
11:42:33 AM: Starting to download cache of 254.9KB
11:42:33 AM: Finished downloading cache in 77.965223ms
11:42:33 AM: Starting to extract cache
11:42:33 AM: Failed to fetch cache, continuing with build
11:42:33 AM: Starting to prepare the repo for build
11:42:33 AM: No cached dependencies found. Cloning fresh repo
11:42:33 AM: git clone https://github.com/AndreBClark/CosmicDivision
11:42:34 AM: Preparing Git Reference refs/heads/master
11:42:35 AM: Starting build script
11:42:35 AM: Installing dependencies
11:42:36 AM: Downloading and installing node v10.19.0...
11:42:37 AM: Downloading https://nodejs.org/dist/v10.19.0/node-v10.19.0-linux-x64.tar.xz...
11:42:37 AM: 
######################                                                    31.4%
11:42:37 AM: 
##########################################################
11:42:37 AM: ############## 100.0%
11:42:37 AM: Computing checksum with sha256sum
11:42:37 AM: Checksums matched!
11:42:40 AM: Now using node v10.19.0 (npm v6.13.4)
11:42:40 AM: Attempting ruby version 2.6.2, read from environment
11:42:41 AM: Using ruby version 2.6.2
11:42:42 AM: Using PHP version 5.6
11:42:42 AM: Started restoring cached node modules
11:42:42 AM: Finished restoring cached node modules
11:42:42 AM: Started restoring cached yarn cache
11:42:42 AM: Finished restoring cached yarn cache
11:42:42 AM: Installing yarn at version 1.17.0
11:42:42 AM: Installing Yarn!
11:42:42 AM: > Downloading tarball...
11:42:42 AM: [1/2]: https://yarnpkg.com/downloads/
11:42:42 AM: 1.17.0/yarn-v1.17.0.tar.gz --> /tmp/yarn.tar.gz.t3RGGKtKUO
11:42:42 AM:   % Total    % Received % Xfer
11:42:42 AM: d  Average Speed   Time    Time     Time  Current
11:42:42 AM:         Dload  Upload   Total   Spent    Left  Speed
11:42:42 AM: 
  0     0    0     0    0     0      0
11:42:42 AM:       0 --:--:-- --:--:-- --:--:--
11:42:42 AM:   0
11:42:42 AM: 
100    80  100    80    0     0    259      0 --:--:-- --:--:-- --:--
11:42:42 AM: :--   259
11:42:42 AM: 
100    93  100    93    0     0    143      0 --:--:-- --:--:-- --:--:--   143
11:42:42 AM: 
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--
11:42:42 AM:  0
11:42:43 AM: 
100   609    0   609    0     0    584      0 --:--:--  0:00:01 --:--:--  2324
11:42:43 AM: 
100 1213k  100 1213k    0     0   813k      0  0:00:01  0:00:01
11:42:43 AM: --:--:--  813k
11:42:43 AM: [2/2]: https://yarnpkg.com/downloads/1.17.0/yarn-v1.17.0.tar.gz.asc -->
11:42:43 AM: /tmp/yarn.tar.gz.t3RGGKtKUO.asc
11:42:43 AM: 
100    84  100    84    0     0   3034      0 --:--:-- --:--:
11:42:43 AM: -- --:--:--  3034
11:42:43 AM: 
100    97  100    97    0     0   1744      0 --:--:-- --:--:-- --:--:--
11:42:43 AM: 1744
11:42:43 AM: 
100   613    0   613    0     0   3268      0 --:--:-- --:--:-- --:--:--  3268
11:42:43 AM: 
  0   832    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
11:42:43 AM: 
100   832  100   832    0     0   3691      0 --:--:-- --:--:
11:42:43 AM: -- --:--:--  812k
11:42:43 AM: > Verifying integrity...
11:42:43 AM: gpg: Signature made Fri 14 Jun 2019 06:55:58 PM UTC using RSA key ID 69475BAA
11:42:43 AM: gpg: Good signature from "Yarn Packaging <yarn@dan.cx>"
11:42:43 AM: gpg: Note: This key has expired!
11:42:43 AM: Primary key fingerprint: 72EC F46A 56B4 AD39 C907  BBB7 1646 B01B 86E5 0310
11:42:43 AM:      Subkey fingerprint: 6D98 490C 6F1A CDDD 448E  4595 4F77 6793 6947 5BAA
11:42:43 AM: > GPG signature looks good
11:42:43 AM: > Extracting to ~/.yarn...
11:42:44 AM: > Adding to $PATH...
11:42:44 AM: > Successfully installed Yarn 1.17.0! Please open another terminal where the `yarn` command will now be available.
11:42:45 AM: Installing NPM modules using Yarn version 1.17.0
11:42:45 AM: yarn install v1.17.0
11:42:45 AM: [1/4] Resolving packages...
11:42:47 AM: warning gatsby > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:48 AM: warning gatsby > gatsby-cli > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/plugins > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/custom > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/types > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/plugins > @jimp/plugin-cover > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/plugins > @jimp/plugin-contain > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/plugins > @jimp/plugin-blur > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/plugins > @jimp/plugin-blit > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/plugins > @jimp/plugin-displace > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/plugins > @jimp/plugin-crop > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/plugins > @jimp/plugin-color > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/plugins > @jimp/plugin-dither > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/plugins > @jimp/plugin-flip > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/plugins > @jimp/plugin-mask > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/plugins > @jimp/plugin-normalize > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/plugins > @jimp/plugin-invert > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/plugins > @jimp/plugin-print > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/plugins > @jimp/plugin-rotate > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/plugins > @jimp/plugin-gaussian > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/plugins > @jimp/plugin-scale > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/plugins > @jimp/plugin-resize > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/custom > @jimp/core > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/types > @jimp/bmp > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/types > @jimp/png > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/types > @jimp/jpeg > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/types > @jimp/gif > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/plugins > @jimp/plugin-cover > @jimp/utils > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:51 AM: warning gatsby-plugin-sharp > potrace > jimp > @jimp/types > @jimp/tiff > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
11:42:57 AM: [2/4] Fetching packages...
11:43:23 AM: info fsevents@1.2.7: The platform "linux" is incompatible with this module.
11:43:23 AM: info "fsevents@1.2.7" is an optional dependency and failed compatibility check. Excluding it from installation.
11:43:23 AM: info fsevents@2.1.2: The platform "linux" is incompatible with this module.
11:43:23 AM: info "fsevents@2.1.2" is an optional dependency and failed compatibility check. Excluding it from installation.
11:43:23 AM: [3/4] Linking dependencies...
11:43:23 AM: warning "gatsby > react-hot-loader@4.12.19" has unmet peer dependency "@types/react@^15.0.0 || ^16.0.0".
11:43:23 AM: warning "gatsby > @typescript-eslint/eslint-plugin > tsutils@3.17.1" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
11:43:23 AM: warning " > gatsby-plugin-styled-components@3.0.7" has unmet peer dependency "babel-plugin-styled-components@>1.5.0".
11:43:23 AM: warning "gatsby-plugin-tinacms > tinacms > react-datetime@2.16.3" has unmet peer dependency "moment@>=2.16.0".
11:43:23 AM: warning "gatsby-plugin-tinacms > tinacms > @tinacms/form-builder@0.2.13" has unmet peer dependency "prop-types@>15".
11:43:23 AM: warning "gatsby-plugin-tinacms > tinacms > @tinacms/form-builder > react-final-form@6.3.5" has unmet peer dependency "final-form@^4.16.1".
11:43:23 AM: warning "gatsby-plugin-tinacms > tinacms > @tinacms/form-builder > react-final-form > ts-essentials@5.0.0" has unmet peer dependency "typescript@>=3.7.0".
11:43:23 AM: warning "gatsby-plugin-tinacms > tinacms > @tinacms/fields > prosemirror-utils@0.9.6" has incorrect peer dependency "prosemirror-tables@^0.9.1".
11:43:23 AM: warning "gatsby-plugin-transition-link > babel-preset-gatsby-package > @babel/plugin-proposal-class-properties@7.4.0" has unmet peer dependency "@babel/core@^7.0.0-0".
11:43:23 AM: warning "gatsby-plugin-transition-link > babel-preset-gatsby-package > @babel/plugin-syntax-dynamic-import@7.2.0" has unmet peer dependency "@babel/core@^7.0.0-0".
11:43:23 AM: warning "gatsby-plugin-transition-link > babel-preset-gatsby-package > @babel/plugin-transform-runtime@7.4.3" has unmet peer dependency "@babel/core@^7.0.0-0".
11:43:23 AM: warning "gatsby-plugin-transition-link > babel-preset-gatsby-package > @babel/preset-react@7.0.0" has unmet peer dependency "@babel/core@^7.0.0-0".
11:43:23 AM: warning "gatsby-plugin-transition-link > babel-preset-gatsby-package > @babel/plugin-proposal-class-properties > @babel/helper-create-class-features-plugin@7.4.3" has unmet peer dependency "@babel/core@^7.0.0".
11:43:23 AM: warning "gatsby-plugin-transition-link > babel-preset-gatsby-package > @babel/preset-react > @babel/plugin-transform-react-display-name@7.2.0" has unmet peer dependency "@babel/core@^7.0.0-0".
11:43:23 AM: warning "gatsby-plugin-transition-link > babel-preset-gatsby-package > @babel/preset-react > @babel/plugin-transform-react-jsx@7.3.0" has unmet peer dependency "@babel/core@^7.0.0-0".
11:43:23 AM: warning "gatsby-plugin-transition-link > babel-preset-gatsby-package > @babel/preset-react > @babel/plugin-transform-react-jsx-self@7.2.0" has unmet peer dependency "@babel/core@^7.0.0-0".
11:43:23 AM: warning "gatsby-plugin-transition-link > babel-preset-gatsby-package > @babel/preset-react > @babel/plugin-transform-react-jsx-source@7.2.0" has unmet peer dependency "@babel/core@^7.0.0-0".
11:43:23 AM: warning "gatsby-plugin-transition-link > babel-preset-gatsby-package > @babel/preset-react > @babel/plugin-transform-react-jsx > @babel/plugin-syntax-jsx@7.2.0" has unmet peer dependency "@babel/core@^7.0.0-0".
11:43:23 AM: warning "gatsby-plugin-transition-link > babel-preset-gatsby-package > @babel/preset-flow@7.8.3" has unmet peer dependency "@babel/core@^7.0.0-0".
11:43:23 AM: warning "gatsby-plugin-transition-link > babel-preset-gatsby-package > @babel/preset-flow > @babel/plugin-transform-flow-strip-types@7.8.3" has unmet peer dependency "@babel/core@^7.0.0-0".
11:43:23 AM: warning "gatsby-plugin-transition-link > babel-preset-gatsby-package > @babel/preset-flow > @babel/plugin-transform-flow-strip-types > @babel/plugin-syntax-flow@7.8.3" has unmet peer dependency "@babel/core@^7.0.0-0".
11:43:47 AM: [4/4] Building fresh packages...
11:44:09 AM: success Saved lockfile.
11:44:09 AM: Done in 84.06s.
11:44:10 AM: NPM modules installed using Yarn
11:44:10 AM: Started restoring cached go cache
11:44:10 AM: Finished restoring cached go cache
11:44:10 AM: unset GOOS;
11:44:10 AM: unset GOARCH;
11:44:10 AM: export GOROOT='/opt/buildhome/.gimme/versions/go1.12.linux.amd64';
11:44:10 AM: export PATH="/opt/buildhome/.gimme/versions/go1.12.linux.amd64/bin:${PATH}";
11:44:10 AM: go version >&2;
11:44:10 AM: export GIMME_ENV='/opt/buildhome/.gimme/env/go1.12.linux.amd64.env';
11:44:10 AM: go version go1.12 linux/amd64
11:44:10 AM: Installing missing commands
11:44:10 AM: Verify run directory
11:44:10 AM: Executing user command: gatsby build
11:44:12 AM: success open and validate gatsby-configs - 0.056s
11:44:14 AM: success load plugins - 1.439s
11:44:14 AM: success onPreInit - 0.010s
11:44:14 AM: success delete html and css files from previous builds - 0.011s
11:44:14 AM: success initialize cache - 0.009s
11:44:14 AM: success copy gatsby files - 0.029s
11:44:14 AM: success onPreBootstrap - 0.006s
11:44:14 AM: success createSchemaCustomization - 0.001s
11:44:14 AM: success source and transform nodes - 0.117s
11:44:15 AM: success building schema - 0.596s
11:44:15 AM: success createPages - 0.042s
11:44:15 AM: success createPagesStatefully - 0.103s
11:44:15 AM: success onPreExtractQueries - 0.003s
11:44:15 AM: success update schema - 0.027s
11:44:15 AM: success extract queries from components - 0.541s
11:44:15 AM: success write out requires - 0.004s
11:44:15 AM: success write out redirect data - 0.001s
11:44:15 AM: warning The icon(src/images/logo.svg) you provided to 'gatsby-plugin-manifest' is not square.
11:44:15 AM: The icons we generate will be square and for the best results we recommend you provide a square icon.
11:44:16 AM: success Build manifest and related icons - 0.233s
11:44:16 AM: success onPostBootstrap - 0.234s
11:44:16 AM: ⠀
11:44:16 AM: info bootstrap finished - 5.711 s
11:44:16 AM: ⠀
11:45:16 AM: warning Browserslist: caniuse-lite is outdated. Please run next command `yarn upgrade`
11:45:22 AM: success Building production JavaScript and CSS bundles - 66.079s
11:45:22 AM: success Rewriting compilation hashes - 0.001s
11:45:22 AM: success run queries - 66.739s - 12/12 0.18/s
11:45:30 AM: failed Building static HTML for pages - 7.251s
11:45:30 AM: error Building static HTML failed for path "/colorable-color-contrast-tool/"
11:45:30 AM:   58 |     __self: this
11:45:30 AM:   59 |   }, function (_ref2) {
11:45:30 AM: > 60 |     var disableAnimation = _ref2.disableAnimation,
11:45:30 AM:      |                                  ^
11:45:30 AM:   61 |         context = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["disableAnimation"]);
11:45:30 AM:   62 |     return _react.default.createElement(_gatsby.Link, (0, _extends2.default)({
11:45:30 AM:   63 |       style: style,
11:45:30 AM: 
11:45:30 AM:   WebpackError: TypeError: Cannot read property 'disableAnimation' of undefined
11:45:30 AM:   
11:45:30 AM:   - TransitionLink.js:60 Object.children
11:45:30 AM:     node_modules/gatsby-plugin-transition-link/components/TransitionLink.js:60:3    4
11:45:30 AM:   
11:45:30 AM: 
11:45:30 AM: not finished Generating image thumbnails - 74.126s
11:45:30 AM: Skipping functions preparation step: no functions directory set
11:45:30 AM: Caching artifacts
11:45:30 AM: Started saving node modules
11:45:30 AM: Finished saving node modules
11:45:30 AM: Started saving yarn cache
11:45:30 AM: Finished saving yarn cache
11:45:30 AM: Started saving pip cache
11:45:30 AM: Finished saving pip cache
11:45:30 AM: Started saving emacs cask dependencies
11:45:30 AM: Finished saving emacs cask dependencies
11:45:30 AM: Started saving maven dependencies
11:45:30 AM: Finished saving maven dependencies
11:45:30 AM: Started saving boot dependencies
11:45:30 AM: Finished saving boot dependencies
11:45:30 AM: Started saving go dependencies
11:45:30 AM: Finished saving go dependencies
11:45:33 AM: Error running command: Build script returned non-zero exit code: 1
11:45:33 AM: Failing build: Failed to build site
11:45:33 AM: failed during stage 'building site': Build script returned non-zero exit code: 1
11:45:33 AM: Finished processing build request in 3m0.440105473s
```
