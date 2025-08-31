
class ElementActions {

    //Method signature
    public click(element:string):void;
    //method signature
    public click(element:string, forceClick:boolean)

    //Single imnplemnetation
    public click(element:string, forceClick?:boolean){
        if(forceClick){
            console.log(`Forcibly clicking the element ${element}`);
       }
       else {
        console.log(`Clicking the element ${element} normally`);
        
       }
    }
}

const actions = new ElementActions();
actions.click(`#Login`);
//actions.click(`#Login`,true)