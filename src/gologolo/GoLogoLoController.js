import AppsterController from '../appster/AppsterController.js'
import {GoLogoLoGUIId} from './GoLogoLoConstants.js'

export default class GoLogoLoController
 extends AppsterController {
    constructor() {
        super();
    }

    processEditText() {
        this.model.updateText();
    }

    registerGoLogoLoEventHandlers(){
         // FIRST THE EDIT TEXT BUTTON IN THE TOOL BAR
         this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_BUTTON, AppsterHTML.CLICK, this.processEditText);

         /* THEN THE CONTROLS ON THE EDIT SCREEN
         this.registerEventHandler(AppsterGUIId.APPSTER_EDIT_HOME_LINK, AppsterHTML.CLICK, this[AppsterCallback.APPSTER_PROCESS_GO_HOME]);
         this.registerEventHandler(AppsterGUIId.APPSTER_EDIT_TRASH, AppsterHTML.CLICK, this[AppsterCallback.APPSTER_PROCESS_DELETE_WORK]);
 
         // AND THE MODAL BUTTONS
         this.registerEventHandler(AppsterGUIId.APPSTER_YES_NO_MODAL_YES_BUTTON, AppsterHTML.CLICK, this[AppsterCallback.APPSTER_PROCESS_CONFIRM_DELETE_WORK]);
         this.registerEventHandler(AppsterGUIId.APPSTER_YES_NO_MODAL_NO_BUTTON, AppsterHTML.CLICK, this[AppsterCallback.APPSTER_PROCESS_CANCEL_DELETE_WORK]);
        */
    }
}