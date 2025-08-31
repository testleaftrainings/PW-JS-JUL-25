export interface EleAction{
    typeAndEnter(locator:string):void
   // method signature visible to user// unimplemented
}

export interface PgAction{
    handleWindow():void 
}


export interface Browser{
    browserImpl():void 
}

export interface PgAction extends Browser{
    clearandType():void
} 



export class webElement implements EleAction,PgAction{

    clearandType(): void {
        console.log("Hello");
        
    }

    browserImpl(): void {
        console.log("launch Browser");
        
    }

    handleWindow(): void {
        console.log("launch Browser");
        
    }

    typeAndEnter(locator: string) {
        console.log(`login loactor ${locator} `);
        
    }
}

const ob = new webElement()
ob.browserImpl()
ob.clearandType()
ob.handleWindow()
ob.typeAndEnter("locatorValue")

