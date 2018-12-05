function main(React, ReactNative, componentState, require) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//var _react = React;
var react_1 = React;

//var _react2 = _interopRequireDefault(_react);
var react_2 = _interopRequireDefault(react_1);
  
return react_1.createElement(react_1.View, {},
        [react_1.createElement(
                        Notification_1.Notification, {
                                "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_notificationMessage",
                                "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_notificationMessage",
                                "cssClass": "notification",
                                "text": null,
                                "notifyType": {}
                        }, []),
                react_1.createElement(
                        Message_1.Message, {
                                "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_messageHeaderContent",
                                "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_messageHeaderContent",
                                "cssClass": "form-message",
                                "text": "Your user ID and password are used to log in to this site. This page allows you to change your user ID. Your user ID must be between 8 and 26 characters in length and may be made up of both letters and numerals. Your user ID is not case sensitive.",
                                "visible": function() {
                                        return true
                                }
                        }, []),
                react_1.createElement(
                        react_1.View, {
                                "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_editZone"
                        }, [
                                react_1.createElement(
                                        "View", {
                                                "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl03_field_container"
                                        },
                                        [
                                                react_1.createElement(
                                                        "View", {
                                                                "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl03_Label_container"
                                                        },
                                                        [
                                                                react_1.createElement(
                                                                        "Label", {
                                                                                "htmlFor": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl03",
                                                                                "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl03_Label"
                                                                        },
                                                                        "Existing User ID"
                                                                )
                                                        ]
                                                ),
                                                react_1.createElement(
                                                        Text_1.Text, {
                                                                "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl03",
                                                                "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl03",
                                                                "cssClass": "form-field-value",
                                                                "fieldCssClass": "",
                                                                "bindingMode": "OneTime",
                                                                "getValue": function() {
                                                                        return root.state.loginName
                                                                },
                                                                "setValue": function(
                                                                        value
                                                                ) {
                                                                        return root.setState(
                                                                                        function(
                                                                                                state
                                                                                        ) {
                                                                                                return immutability_helper_1.default(
                                                                                                                state, {
                                                                                                                        "loginName": {
                                                                                                                                $set: value
                                                                                                                        }
                                                                                                                }
                                                                                                        );
                                                                                        }
                                                                                )
                                                                }
                                                        },
                                                        []
                                                )
                                        ]
                                ),
                                react_1.createElement(
                                        "View", {
                                                "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04_field_container"
                                        },
                                        [
                                                react_1.createElement(
                                                        "View", {
                                                                "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04_Label_container"
                                                        },
                                                        [
                                                                react_1.createElement(
                                                                        "Label", {
                                                                                "htmlFor": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04",
                                                                                "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04_Label"
                                                                        },
                                                                        "New User ID"
                                                                )
                                                        ]
                                                ),
                                                react_1.createElement(
                                                        Text_1.Text, {
                                                                "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04",
                                                                "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04",
                                                                "cssClass": "form-control component-group",
                                                                "fieldCssClass": "",
                                                                "bindingMode": "",
                                                                "validators": [
                                                                        react_1.createElement(
                                                                                RequiredValidator_1.RequiredValidator, {
                                                                                        "key": "required",
                                                                                        "errorMessage": "This field is required."
                                                                                },
                                                                                []
                                                                        ),
                                                                        react_1.createElement(
                                                                                MaxLengthValidator_1.MaxLengthValidator, {
                                                                                        "key": "maxLength",
                                                                                        "errorMessage": "This field accepts at most {maxLength} characters.",
                                                                                        "maxLength": function() {
                                                                                                return root.state.maxLength
                                                                                        }
                                                                                },
                                                                                []
                                                                        ),
                                                                        react_1.createElement(
                                                                                MinLengthValidator_1.MinLengthValidator, {
                                                                                        "key": "minLength",
                                                                                        "errorMessage": "This field accepts at least {minLength} characters.",
                                                                                        "minLength": function() {
                                                                                                return root.state.minLength
                                                                                        }
                                                                                },
                                                                                []
                                                                        ),
                                                                        react_1.createElement(
                                                                                ValidCharsValidator_1.ValidCharsValidator, {
                                                                                        "key": "pattern",
                                                                                        "errorMessage": "The character \u2018{invalidChar}\u2019 is not allowed.",
                                                                                        "validChars": function() {
                                                                                                return root.state.validChars
                                                                                        }
                                                                                },
                                                                                []
                                                                        )
                                                                ],
                                                                "getValue": function() {
                                                                        return root.state.loginName
                                                                },
                                                                "setValue": function(
                                                                        value
                                                                ) {
                                                                        return root.setState(
                                                                                        function(
                                                                                                state
                                                                                        ) {
                                                                                                return immutability_helper_1.default(
                                                                                                                state, {
                                                                                                                        "loginName": {
                                                                                                                                $set: value
                                                                                                                        }
                                                                                                                }
                                                                                                        );
                                                                                        }
                                                                                )
                                                                },
                                                                "type": "text",
                                                                "handleIconClick": "",
                                                                "placeHolder": ""
                                                        },
                                                        []
                                                )
                                        ]
                                ),
                                react_1.createElement(
                                        "View", {
                                                "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02_field_container"
                                        },
                                        [
                                                react_1.createElement(
                                                        "View", {
                                                                "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02_Label_container"
                                                        },
                                                        [
                                                                react_1.createElement(
                                                                        "Label", {
                                                                                "htmlFor": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02",
                                                                                "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02_Label"
                                                                        },
                                                                        "Confirm User ID"
                                                                )
                                                        ]
                                                ),
                                                react_1.createElement(
                                                        ConfirmationText_1.ConfirmationText, {
                                                                "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02",
                                                                "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02",
                                                                "cssClass": "form-control component-group",
                                                                "fieldCssClass": "",
                                                                "bindingMode": "",
                                                                "validators": [
                                                                        react_1.createElement(
                                                                                RequiredValidator_1.RequiredValidator, {
                                                                                        "key": "required",
                                                                                        "errorMessage": "This field is required."
                                                                                },
                                                                                []
                                                                        ),
                                                                        react_1.createElement(
                                                                                MaxLengthValidator_1.MaxLengthValidator, {
                                                                                        "key": "maxLength",
                                                                                        "errorMessage": "This field accepts at most {maxLength} characters.",
                                                                                        "maxLength": function() {
                                                                                                return root.state.maxLength
                                                                                        }
                                                                                },
                                                                                []
                                                                        ),
                                                                        react_1.createElement(
                                                                                MinLengthValidator_1.MinLengthValidator, {
                                                                                        "key": "minLength",
                                                                                        "errorMessage": "This field accepts at least {minLength} characters.",
                                                                                        "minLength": function() {
                                                                                                return root.state.minLength
                                                                                        }
                                                                                },
                                                                                []
                                                                        ),
                                                                        react_1.createElement(
                                                                                ValidCharsValidator_1.ValidCharsValidator, {
                                                                                        "key": "pattern",
                                                                                        "errorMessage": "The character \u2018{invalidChar}\u2019 is not allowed.",
                                                                                        "validChars": function() {
                                                                                                return root.state.validChars
                                                                                        }
                                                                                },
                                                                                []
                                                                        )
                                                                ],
                                                                "getValue": function() {
                                                                        return root.state.loginName
                                                                },
                                                                "setValue": function(
                                                                        value
                                                                ) {
                                                                        return root.setState(
                                                                                        function(
                                                                                                state
                                                                                        ) {
                                                                                                return immutability_helper_1.default(
                                                                                                                state, {
                                                                                                                        "loginName": {
                                                                                                                                $set: value
                                                                                                                        }
                                                                                                                }
                                                                                                        );
                                                                                        }
                                                                                )
                                                                },
                                                                "mismatchErrorMessage": "The content provided in the Confirm User ID field does not match the content in the New User ID field."
                                                        },
                                                        []
                                                )
                                        ]
                                )
                        ]),
                react_1.createElement(
                        Button_1.Button, {
                                "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_btnConfirm",
                                "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_btnConfirm",
                                "cssClass": "btn btn-primary btn-full-width component-group",
                                "Label": "Save Changes",
                                "onClick": function() {
                                        return root.submitChangeLoginName()
                                }
                        }, []),
                react_1.createElement(
                        Button_1.Button, {
                                "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_btnCancel",
                                "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_btnCancel",
                                "cssClass": "btn btn-secondary btn-full-width component-group",
                                "Label": "Cancel",
                                "onClick": function() {
                                        return root.cancelChangeLoginName()
                                }
                        }, [])
        ])
}



var _reactNative = ReactNative;

//  return _react2.default.createElement(
//          _reactNative.Text,
//          { onPress : function () { alert(componentState.state.existingUserId) }},
//          ['Nice Once Again. Thank you !!']
//      );
  return react_2.default.createElement(
          _reactNative.Text,
          { onPress : function () { alert(componentState.state.existingUserId) }},
          ['Nice Once Again. Thank you !!']
      );

}
