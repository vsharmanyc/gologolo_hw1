import {GoLogoLoGUIClass, GoLogoLoGUIId, GoLogoLoText} from './GoLogoLoConstants.js'
import {AppsterHTML, AppsterGUIClass, AppsterGUIId, AppsterText,AppsterSymbols} from '../appster/AppsterConstants.js'
import AppsterView from '../appster/AppsterView.js'

export default class GoLogoLoView extends AppsterView {
    constructor() {
        super();
    }

    fillAppWorkspace(workspace) {
        let colorPickerAttributes = [];
        colorPickerAttributes[AppsterHTML.TYPE] = AppsterHTML.COLOR;
        let rangeAttributes = [];
        rangeAttributes[AppsterHTML.TYPE] = AppsterHTML.RANGE;

        // FIRST MAKE THE TOOLBAR
        let toolbar = this.buildElement(AppsterHTML.DIV, GoLogoLoGUIId.GOLOGOLO_TOOLBAR);
        let editTextButton = this.buildElement(AppsterHTML.BUTTON, GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_BUTTON, [], [], GoLogoLoText.GOLOGOLO_EDIT_TEXT_TEXT);
        // editTextButton.innerHTML = AppsterSymbols.EDIT;
        let fontSizeSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER, [], {"type" : "range", "min" : "1"});
        let textColorPicker = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER, [], colorPickerAttributes);
        let backgroundColorPicker = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER, [], colorPickerAttributes);
        let borderColorPicker = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER, [], colorPickerAttributes);
        let borderRadiusSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER, [], rangeAttributes);
        let borderThicknessSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER, [], rangeAttributes);
        let paddingSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER, [], rangeAttributes);
        let marginSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER, [], rangeAttributes);
        let textDiv = this.buildElement(AppsterHTML.DIV, GoLogoLoGUIId.GOLOGOLO_TEXT);
        let promptClass = [GoLogoLoGUIClass.GOLOGOLO_CONTROL_PROMPT];
        toolbar.appendChild(editTextButton);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_FONT_SIZE_TEXT));
        toolbar.appendChild(fontSizeSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_TEXT_COLOR_TEXT));
        toolbar.appendChild(textColorPicker);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BACKGROUND_COLOR_TEXT));
        toolbar.appendChild(backgroundColorPicker);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BORDER_COLOR_TEXT));
        toolbar.appendChild(borderColorPicker);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BORDER_RADIUS_TEXT));
        toolbar.appendChild(borderRadiusSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BORDER_THICKNESS_TEXT));
        toolbar.appendChild(borderThicknessSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_PADDING_TEXT));
        toolbar.appendChild(paddingSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_MARGIN_TEXT));
        toolbar.appendChild(marginSlider);

        let modal = this.buildLogoTextInputModal();
        console.log("logo view");
        console.log(document.getElementById(AppsterGUIId.APPSTER_EDIT_SCREEN));
        
        //document.getElementById(AppsterGUIId.APPSTER_ROOT_DIV).appendChild(modal);
        
        workspace.appendChild(toolbar);
        workspace.appendChild(textDiv);
        return workspace;
    }

    // returns list of modals elements created for edit screen
    getEditScreenModals(){
        return this.buildLogoTextInputModal();
    }

    loadWork(work) {
        let textDiv = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        textDiv.innerHTML = work.getText();
        let fontSizeSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER);
        fontSizeSlider.value = work.getFontSize();
        let textColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER);
        textColorPicker.value = work.getTextColor();
        let backgroundColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER);
        backgroundColorPicker.value = work.getBackgroundColor();
        let borderColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER);
        borderColorPicker.value = work.getBorderColor();
        let borderRadiusSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER);
        borderRadiusSlider.value = work.getBorderRadius();
        let borderThicknessSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER);
        borderThicknessSlider.value = work.getBorderThickness();
        let paddingSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER);
        paddingSlider.value = work.getPadding();
        let marginSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER);
        marginSlider.value = work.getMargin();
        this.loadWorkStyle(work);
    }

    loadWorkStyle(work) {
        let textDiv = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        textDiv.textContent = work.getText();
        textDiv.style.fontSize = work.getFontSize() + "px";
        textDiv.style.color = work.getTextColor();
        textDiv.style.backgroundColor = work.getBackgroundColor();
        textDiv.style.borderColor = work.getBorderColor();
        textDiv.style.borderRadius = work.getBorderRadius() + "px";
        textDiv.style.borderWidth = work.getBorderThickness() + "px";
        textDiv.style.borderStyle = work.getBorderType();
        textDiv.style.padding = work.getPadding() + "px";
        textDiv.style.margin = work.getMargin() + "px";
    }

    addListItem(initText) {
        let textList = document.getElementById(RTA_GUIId.RTA_TEXT_LIST);
        let listItemCount = textList.childNodes.length;
        let newListItem = this.buildElement(AppsterHTML.LI, RTA_GUIId.RTA_TEXT_LIST_ITEM 
            + listItemCount);
        newListItem.innerHTML = initText;
        textList.appendChild(newListItem);
    }

    appendLetter(listItemId, letterToAppend) {
        let textList = document.getElementById(listItemId);
        textList.innerHTML += textList.innerHTML + letterToAppend;
    }

    /**
     * This method is for hiding the edit logo text input dialog.
     */
    hideLogoInputDialog() {
        let dialog = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL);
        dialog.classList.remove(AppsterGUIClass.IS_VISIBLE);
    }

    /**
     * This method is for showing the edit logo text input dialog.
     */
    showLogoInputDialog() {
        let dialog = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL);
        dialog.classList.add(AppsterGUIClass.IS_VISIBLE);
    }

    buildLogoTextInputModal() {
        let textModal = this.buildElement(AppsterHTML.DIV,
            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL,
            [AppsterGUIClass.APPSTER_MODAL],
            [],
            null,
            AppsterGUIClass.MODAL_ANIMATION_LEFT);
        let textFrame = this.buildElement(AppsterHTML.DIV,
            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_FRAME,
            [AppsterGUIClass.APPSTER_MODAL_FRAME]);
        let header = this.buildElement(AppsterHTML.HEADER,
            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_HEADER,
            [AppsterGUIClass.APPSTER_MODAL_HEADER]);
        let section = this.buildElement(AppsterHTML.SECTION,
            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_SECTION,
            [AppsterGUIClass.APPSTER_MODAL_SECTION]);
        let p = this.buildElement(AppsterHTML.P);
        let strong = this.buildElement(AppsterHTML.STRONG,
            "",
            [],
            [],
            "Edit the following logo text:");
        let textFieldAttributes = [];
        textFieldAttributes[AppsterHTML.TYPE] = AppsterHTML.TEXT;
        let textField = this.buildElement(AppsterHTML.INPUT,
            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_TEXTFIELD,
            [AppsterGUIClass.APPSTER_MODAL_TEXTFIELD],
            textFieldAttributes);
        let enterButton = this.buildElement(AppsterHTML.BUTTON,
           GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_ENTER_BUTTON,
            [AppsterGUIClass.APPSTER_MODAL_BUTTON],
            [],
            AppsterText.APPSTER_TEXT_INPUT_MODAL_ENTER_BUTTON_TEXT);
        let cancelButton = this.buildElement(AppsterHTML.BUTTON,
            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_CANCEL_BUTTON,
            [AppsterGUIClass.APPSTER_MODAL_BUTTON],
            [],
            AppsterText.APPSTER_TEXT_INPUT_MODAL_CANCEL_BUTTON_TEXT);
        let footer = this.buildElement(AppsterHTML.FOOTER,
            "",
            [AppsterGUIClass.APPSTER_MODAL_FOOTER],
            [],
            "Change Logo Text");
        p.appendChild(strong);
        section.appendChild(p);
        textFrame.appendChild(header);
        textFrame.appendChild(section);
        section.appendChild(textField);
        section.appendChild(enterButton);
        section.appendChild(cancelButton);
        textFrame.appendChild(footer);
        textModal.appendChild(textFrame);
        return textModal;
    }
}