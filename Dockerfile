# Step 1: Node base image
FROM node:alpine as build

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json files
COPY package.json yarn.lock ./

# Step 4: Install dependencies
RUN yarn install

# Step 5: Copy project files
COPY . .

# Step 6: Build the React app
RUN yarn build

# Step 7: Serve the app using Node.js
FROM node:14
WORKDIR /app
COPY --from=build /app/build .
RUN npm install -g serve
CMD ["serve", "-s", ".", "-l", "3000"]
