import express from 'express';
const routes = express.Router();

const routesList = {

}


for (const router in routesList) {
    routes.use(routesList[router]);
}

export default routes;
