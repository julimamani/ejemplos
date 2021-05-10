import { Team } from "./team";

export class Player {
    private _id:number;
    first_name:string;
    height_feet:string;
    height_inches:string;
    last_name: Date;
    position:string;
    team: Team;
    weight_pounds:string;
        set id(id: number) {
        this._id = id + 100;
        }

        get id(){
        return this._id;
        }

}
