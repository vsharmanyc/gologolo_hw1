import AppsterController from '../appster/AppsterController.js'
import {GoLogoLoGUIId, GoLogoLoCallback} from './GoLogoLoConstants.js'
import {AppsterCallback, AppsterGUIId, AppsterHTML} from '../Appster/AppsterConstants.js'

export default class GoLogoLoController
 extends AppsterController {
    constructor() {
        super();
    }

    registerEventHandlers() {
        console.log("registerEventHandlers");
        
        // THEN REGISTER MODAL BUTTONS
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_CANCEL_BUTTON, AppsterHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_CANCEL_LOGO_TEXT_INPUT]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_ENTER_BUTTON, AppsterHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_ENTER_LOGO_TEXT_INPUT]);

        //THE CONTROLS ON THE TOOL BAR
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_BUTTON, AppsterHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_EDIT_TEXT]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER, AppsterHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_FONT_SIZE_SLIDE]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER, AppsterHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_TEXT_COLOR_PICK]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER, AppsterHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_BACKGROUND_COLOR_PICK]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER, AppsterHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_BORDER_COLOR_PICK]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER, AppsterHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_BORDER_RADIUS_SLIDE]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER, AppsterHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_BORDER_THICKNESS_SLIDE])
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER, AppsterHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_PADDING_SLIDE]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER, AppsterHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_MARGIN_SLIDE]);

    }

    processEditText = () => {
        console.log("processEditText");
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_TEXTFIELD).value = this.model.currentWork.getText();
        this.model.view.showLogoInputDialog();

        //this.model.updateText();
    }

    processCancelLogoTextInput = () =>{
        console.log("CancelLogoTextInput");
        this.model.view.hideLogoInputDialog();
    }

    processEnterLogoTextInput = () =>{
        console.log("EnterLogoTextInput");
        let value = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_TEXTFIELD).value;
        this.model.currentWork.setText(value);
        this.model.view.loadWorkStyle(this.model.currentWork);
        this.model.view.hideLogoInputDialog();
    }


    processFontSizeSlide = () => {
        let value = document.getElementById(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER).value;
        this.model.currentWork.setFontSize(value);
        this.model.view.loadWorkStyle(this.model.currentWork);
    }

    processTextColorPick = () => {
        let value = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER).value;
        this.model.currentWork.setTextColor(value);
        this.model.view.loadWorkStyle(this.model.currentWork);
    }

    processBackgroundColorPick = () => {
        let value = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER).value;
        this.model.currentWork.setBackgroundColor(value);
        this.model.view.loadWorkStyle(this.model.currentWork);
    }

    processBorderColorPick = () => {
        let value = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER).value;
        this.model.currentWork.setBorderColor(value);
        this.model.view.loadWorkStyle(this.model.currentWork);
    }

    processBorderRadiusSlide = () => {
        let value = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER).value;
        this.model.currentWork.setBorderRadius(value);
        this.model.view.loadWorkStyle(this.model.currentWork);
    }

    processBorderThicknessSlide = () => {
        let value = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER).value;  
        this.model.currentWork.setBorderThickness(value);
        this.model.view.loadWorkStyle(this.model.currentWork);
    }

    processPaddingSlide = () => {
        let value = document.getElementById(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER).value;
        this.model.currentWork.setPadding(value);
        this.model.view.loadWorkStyle(this.model.currentWork);
    }

    processMarginSlide = () => {
        let value = document.getElementById(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER).value;
        this.model.currentWork.setMargin(value);
        this.model.view.loadWorkStyle(this.model.currentWork);
    }

}