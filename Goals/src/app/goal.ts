/*
Inside the class goal(goal.ts) we defined the id and attributed it to the datatype number and name to be a string.
We have exported the class to make it available for use anywhere else we need it in the app.
*/


// export class Goal {
//   id: number;
//   name: string;
//   description: string;
// }

export class Goal {
  showDescription: boolean;

      constructor(public id: number, public name: string, public description: string, public completeDate: Date){
        this.showDescription=false;
      }
}

/*
 We have now changed how we create the goal blueprint class by using a constructor function.
 Inside the constructor function, we have passed the goal properties we had before, as arguments of the constructor.*/
