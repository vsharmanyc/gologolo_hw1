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
        //first create input prompt modal


        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_TEXTFIELD).value = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).textContent;
        this.model.view.showLogoInputDialog();


        //this.model.updateText();
    }

    processCancelLogoTextInput = () =>{
        console.log("CancelLogoTextInout");
        this.model.view.hideLogoInputDialog();
    }

    processEnterLogoTextInput = () =>{
        console.log("EnterLogoTextInput");
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).textContent = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_TEXTFIELD).value;
        this.model.view.hideLogoInputDialog();
    }


    processFontSizeSlide = () => {
        let value = document.getElementById(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER).value;
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.fontSize = value+"px";
    }

    processTextColorPick = () => {
        let value = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER).value;
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.color = value;
    }

    processBackgroundColorPick = () => {
        let value = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER).value;
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.backgroundColor = value;
    }

    processBorderColorPick = () => {
        let value = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER).value;
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.borderColor = value;
    }

    processBorderRadiusSlide = () => {
        let value = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER).value;
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.borderRadius = value+"px";
    }

    processBorderThicknessSlide = () => {
        console.log("border thickness slider");
        let value = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER).value;  
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.borderStyle = "solid";
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.borderWidth = value+"px";
        
        console.log("document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.borderWidth = "+document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.borderWidth);

        //this.model.currentWork.setBorderThickness(parseInt(value));
    }

    processPaddingSlide = () => {
        let value = document.getElementById(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER).value;
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.padding = value+"px";
    }

    processMarginSlide = () => {
        let value = document.getElementById(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER).value;
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.margin = value+"px";
    }

}