/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

        $('.btn-submit').on('click',submitFunc);

        function submitFunc(){

            $.get("https://cb02b2f2.ngrok.io/api/v1/auth/facebook", function(data, status){
                alert("Data: " + JSON.stringify(data) + "\nStatus: " + status);
            });

            // $.ajax({
            //     url: "http://192.168.0.102/api/v1/auth/facebook",
            //     type: "GET",
            //     contentType: "application/json; charset=utf-8",
            // }).done(function(response, textStatus, jqXHR) {
            //     alert(JSON.stringify(response));
            // }).fail(function(jqXHR, textStatus, errorThrown) {
            //    alert(JSON.stringify(errorThrown));
            // })
            // var email = $(".email").val();
            // var password = $(".password").val();
            // alert(`attempt to login ${email} with password ${password}`);
        }
        // document.querySelector('button').addEventListener('click', this.clickHandler.bind(this), false);
           //  main();
    },

    // clickHandler: function(element) {
    //     alert('test successful');
    // },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
};

app.initialize();