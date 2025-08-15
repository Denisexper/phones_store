import { Router, Request, Response } from "express";
import { controllerExample } from "../controllers/example.service";

export class exampleRoutes {

  private controller: controllerExample;
  private router: Router;

  constructor(controller: controllerExample, router: Router) {
    (this.controller = controller), (this.router = router);
  }

  initiRoutesexa() {

    try {
      this.router.get("/get/:id", (req: Request, res: Response) =>
        this.controller.getById(req, res)
      );
      this.router.get("/get", (req: Request, res: Response) =>
        this.controller.getAll(req, res)
      );
      this.router.post("/create", (req: Request, res: Response) =>
        this.controller.create(req, res)
      );
      this.router.put("/update/:id", (req: Request, res: Response) =>
        this.controller.update(req, res)
      );
      this.router.delete("/delete/:id", (req: Request, res: Response) =>
        this.controller.deleteP(req, res)
      );

      return this.router;

    } catch (error) {

        throw new Error(error as string)
    }
  }
}
