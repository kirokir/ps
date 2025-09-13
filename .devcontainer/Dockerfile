# Start from the official Microsoft development container image for Node.js 20.
# See here for image contents: https://github.com/devcontainers/images/tree/main/src/javascript-node
FROM mcr.microsoft.com/devcontainers/javascript-node:1-20-bullseye

# The dev container feature installs GitHub CLI for us, but if you needed other
# system-level dependencies, you would install them here using apt-get.
# For example:
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package>

# Install pnpm globally, which is often faster and more efficient than npm.
# The project can still be used with npm, but this provides a performance option.
RUN su node -c "npm install -g pnpm"

# [Optional] Switch back to the non-root user.
USER node