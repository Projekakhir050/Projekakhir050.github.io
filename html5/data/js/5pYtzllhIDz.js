window.globalProvideData('slide', '{"title":"Gaya yang ditimbulkan oleh gesekan antara dua permukaan benda dinamakan gaya ….","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide8","width":720,"height":405,"resume":true,"background":{"type":"swf","imagedata":{"assetId":0,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"5pYtzllhIDz","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"6gqII1C0tlG.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_this.5rsQ4ZBFKph"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6fSwNB9vZ3t.InvalidPromptSlide"}}]}]},"ReviewInt_68B3yOS89XZ":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6gqII1C0tlG"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5rsQ4ZBFKph.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"68B3yOS89XZ_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"68B3yOS89XZ_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_68B3yOS89XZ","typea":"var","valueb":"6eHrecmtFSG","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00001100101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6eHrecmtFSG.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_68B3yOS89XZ"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6eHrecmtFSG.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_68B3yOS89XZ"}]}]}]},"ReviewIntCorrectIncorrect_68B3yOS89XZ":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"68B3yOS89XZ_ReviewShape"}}]},"AnsweredInt_68B3yOS89XZ":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_68B3yOS89XZ"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001100101"}]}]},"DisableChoices_68B3yOS89XZ":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6gqII1C0tlG"},"enabled":{"type":"boolean","value":false}}]},"68B3yOS89XZ_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5rsQ4ZBFKph.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6eHrecmtFSG.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_68B3yOS89XZ"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5rsQ4ZBFKph.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5rsQ4ZBFKph.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_68B3yOS89XZ"}]}]}]}]},"SetLayout_pxabnsnfns00001100101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001100101"}]}]},"NavigationRestrictionNextSlide_5pYtzllhIDz":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5t5j8u1tgxd"}}]},"NavigationRestrictionPreviousSlide_5pYtzllhIDz":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00001100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00001100101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6fSwNB9vZ3t","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6fSwNB9vZ3t","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6eHrecmtFSG_TimerStopped","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.6eHrecmtFSG_timer"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6eHrecmtFSG_TimerExpired","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_68B3yOS89XZ"}]},{"kind":"showtimer","id":"_player.6eHrecmtFSG_timer"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_68B3yOS89XZ","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_68B3yOS89XZ"}],"elseActions":[{"kind":"exe_actiongroup","id":"68B3yOS89XZ_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_68B3yOS89XZ","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_68B3yOS89XZ","typea":"var","valueb":"6eHrecmtFSG","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6eHrecmtFSG"},"completed_slide_ref":{"type":"string","value":"_player.5xn1mu0ff8R.61naw8ZMRQu"}}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5pYtzllhIDz"}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5pYtzllhIDz"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5vwtrQe6cue"}},{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"68B3yOS89XZ_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6gqII1C0tlG"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5nydmiWgBTt"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6lTEruDPDS2"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":4,"id":"01","url":"story_content/63U0kistnFL_80_DX1440_DY1440.swf","type":"normal","altText":"Picture 1","width":1440,"height":1047,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":-21,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":213,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":426,"altText":"Picture 1","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":426,"strokewidth":0}},"width":720,"height":426,"resume":true,"useHandCursor":true,"id":"5vwtrQe6cue"},{"kind":"textinput","bindto":"_player.TextEntry2","align":"left","verticalAlign":"top","rtl":false,"numeric":false,"multiline":false,"maxchars":0,"placeholder":"type your text here","fontsize":16,"textcolor":"0x000000","bold":false,"italic":false,"font":"Open Sans Charset0_v9TY33EDE6F2","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":36,"yPos":101,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":323.5,"rotateYPos":14.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"6gqII1C0tlG","linkId":"","type":"vectortext","xPos":10,"yPos":5,"width":628,"height":30,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":131,"bottom":20,"pngfb":false,"pr":{"l":"Lib","i":151}}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":31,"strokewidth":1}},"width":648,"height":30,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":649,"bottom":31,"altText":"type your text here","pngfb":false,"pr":{"l":"Lib","i":150}}},"id":"6gqII1C0tlG","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TextEntry2","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"exe_actiongroup","id":"_parent.ActGrpOnSubmitButtonClick"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5nydmiWgBTt_-31569826","id":"01","linkId":"txt__default_5nydmiWgBTt","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":642,"bottom":63,"pngfb":false,"pr":{"l":"Lib","i":152}}}],"shapemaskId":"","xPos":36,"yPos":17,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":34,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":648,"bottom":68,"altText":"Gaya yang ditimbulkan oleh gesekan antara dua permukaan benda dinamakan gaya ….","pngfb":false,"pr":{"l":"Lib","i":137}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":69,"strokewidth":0}},"width":648,"height":68,"resume":true,"useHandCursor":true,"id":"5nydmiWgBTt"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":9,"id":"01","url":"story_content/5lBcWhVtHZ8_80_DX100_DY100.swf","type":"normal","width":100,"height":99,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":24,"yPos":330,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":25,"rotateYPos":24,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":51,"bottom":48,"altText":"Button 2","pngfb":false,"pr":{"l":"Lib","i":48}},"html5data":{"xPos":-1,"yPos":-1,"width":51,"height":49,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":51,"bottom":48,"altText":"Button 1","pngfb":false,"pr":{"l":"Lib","i":48}},"html5data":{"xPos":-1,"yPos":-1,"width":52,"height":49,"strokewidth":0}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":53,"bottom":50,"altText":"Button 1","pngfb":false,"pr":{"l":"Lib","i":49}},"html5data":{"xPos":-3,"yPos":-3,"width":56,"height":53,"strokewidth":3}}},{"kind":"state","name":"_default_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":51,"bottom":48,"altText":"Button 1","pngfb":false,"pr":{"l":"Lib","i":48}},"html5data":{"xPos":-1,"yPos":-1,"width":52,"height":49,"strokewidth":0}}},{"kind":"state","name":"_default_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":51,"bottom":48,"altText":"Button 1","pngfb":false,"pr":{"l":"Lib","i":48}},"html5data":{"xPos":-1,"yPos":-1,"width":52,"height":49,"strokewidth":0}}},{"kind":"state","name":"_default_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":53,"bottom":50,"altText":"Button 1","pngfb":false,"pr":{"l":"Lib","i":49}},"html5data":{"xPos":-3,"yPos":-3,"width":56,"height":53,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":52,"bottom":49,"altText":"Button 1","pngfb":false,"pr":{"l":"Lib","i":50}},"html5data":{"xPos":-2,"yPos":-2,"width":54,"height":51,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":52,"bottom":49,"altText":"Button 1","pngfb":false,"pr":{"l":"Lib","i":50}},"html5data":{"xPos":-2,"yPos":-2,"width":54,"height":51,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":53,"bottom":50,"altText":"Button 1","pngfb":false,"pr":{"l":"Lib","i":49}},"html5data":{"xPos":-3,"yPos":-3,"width":56,"height":53,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":52,"bottom":49,"altText":"Button 1","pngfb":false,"pr":{"l":"Lib","i":50}},"html5data":{"xPos":-2,"yPos":-2,"width":54,"height":51,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":52,"bottom":49,"altText":"Button 1","pngfb":false,"pr":{"l":"Lib","i":50}},"html5data":{"xPos":-2,"yPos":-2,"width":54,"height":51,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":53,"bottom":50,"altText":"Button 1","pngfb":false,"pr":{"l":"Lib","i":49}},"html5data":{"xPos":-3,"yPos":-3,"width":56,"height":53,"strokewidth":3}}}],"width":50,"height":48,"resume":true,"useHandCursor":true,"id":"6lTEruDPDS2","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_visited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savevisited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetVisitedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"var","value":"#_visited"}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetVisitedState","scopeRef":{"type":"string","value":"_this"}},{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5X5o95XNTmW.5ap8Kh2mLTs"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"68B3yOS89XZ_CorrectReview","id":"01","linkId":"68B3yOS89XZ_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":402,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":109}}}],"shapemaskId":"","xPos":0,"yPos":365,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":108}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"68B3yOS89XZ_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"68B3yOS89XZ_IncorrectReview","id":"01","linkId":"68B3yOS89XZ_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":411,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":111}}}],"shapemaskId":"","xPos":0,"yPos":365,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":110}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"68B3yOS89XZ_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"txt_68B3yOS89XZ_ReviewShape","id":"01","linkId":"txt_68B3yOS89XZ_ReviewShape","type":"vectortext","altText":"","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":168,"bottom":225,"pngfb":false,"pr":{"l":"Lib","i":154}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":4,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":159,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":700,"bottom":229,"altText":"","pngfb":false,"pr":{"l":"Lib","i":153}},"html5data":{"xPos":1,"yPos":1,"width":698,"height":227,"strokewidth":1}},"width":648,"height":318,"resume":false,"useHandCursor":true,"id":"68B3yOS89XZ_ReviewShape"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');