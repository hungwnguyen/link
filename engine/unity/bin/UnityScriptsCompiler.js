if ( TRACE ) { TRACE( JSON.parse( '["Test#init","Test#ActivateOnGetSound","Test#SaySomethingToUnity","Test#Update"]' ) ); }
/**
 * @version 1.0.9076.36690
 * @copyright anton
 * @compiler Bridge.NET 17.9.33-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*Test start.*/
    Bridge.define("Test", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            currentStatus: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Test#init", this ); }

                this.currentStatus = false;
            }
        },
        methods: {
            /*Test.ActivateOnGetSound start.*/
            ActivateOnGetSound: function () {
if ( TRACE ) { TRACE( "Test#ActivateOnGetSound", this ); }

                this.transform.GetChild(0).gameObject.SetActive(this.currentStatus);
                this.currentStatus = !this.currentStatus;
            },
            /*Test.ActivateOnGetSound end.*/

            /*Test.SaySomethingToUnity start.*/
            SaySomethingToUnity: function (message) {
if ( TRACE ) { TRACE( "Test#SaySomethingToUnity", this ); }

                UnityEngine.Debug.Log$1(message);
            },
            /*Test.SaySomethingToUnity end.*/

            /*Test.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Test#Update", this ); }

                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.Space)) {
                    this.ActivateOnGetSound();
                }
            },
            /*Test.Update end.*/


        }
    });
    /*Test end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System"];

    /*Test start.*/
    $m("Test", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ActivateOnGetSound","t":8,"sn":"ActivateOnGetSound","rt":$n[0].Void},{"a":2,"n":"SaySomethingToUnity","t":8,"pi":[{"n":"message","pt":$n[0].String,"ps":0}],"sn":"SaySomethingToUnity","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"currentStatus","t":4,"rt":$n[0].Boolean,"sn":"currentStatus","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Test end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
