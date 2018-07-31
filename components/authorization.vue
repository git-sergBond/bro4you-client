<template>
    <div>
        <!--
        <div class="modal-form">
            <div class="button-close">

            </div>

            <div class="socialNet">

            </div>
            <div class="login">
                <p></p>
            </div>
            <div class="number">

            </div>

            <div class="validation">

            </div>
            <div class="forgot-pass">

            </div>
            <div class="message">

            </div>
            <div class="forgot-login">

            </div>
            <div class="buttons">
                <div class="ok">

                </div>
                <div class="clear">

                </div>
            </div>
        </div>
        -->
        <div class="main-buttons">
            <div class="angle-hex-item signIn">
                <img src="images/icons/open64.png"/>
            </div>
            <div class="angle-hex-item signUp">
                <img src="images/icons/save64.png"/>
            </div>
        </div>
        <div class="second-buttons">
            <div class="angle-hex-item item1">
                <img src="images/icons/smail64.png"/>
            </div>
            <div class="angle-hex-item item2">
                <img src="images/icons/shop64.png"/>
            </div>
            <div class="angle-hex-item item3">
                <img src="images/icons/leter80.png"/>
            </div>
            <div class="angle-hex-item item4">
                <img src="images/icons/close64.png"/>
            </div>
            <div class="angle-hex-item item5">
                <img src="images/icons/chat50.png"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "authorization",
    }
</script>

<style scoped>
    img{
        width: 32px;
        height: 32px;
    }
    .signIn{
        position: absolute;
        left: -50px;
        top: 5px;
    }
    .signUp{
        position: absolute;
        right: -50px;
        top: 5px;
    }
    .angle-hex-item{
        --proporions: 32px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        --proporions: 40px;
        width: var(--proporions);
        /*height: var(--proporions);*/
    }
    .angle-hex-item{
        box-shadow: 0 0 50px black;
    }
    .angle-hex-item:hover{
        box-shadow: 0 0 50px green;
    }
    .angle-hex-item.item1{
        transform: rotate(0deg);
        bottom: 60px;
        left: -50px;
    }
    .angle-hex-item.item2{
        transform: rotate(-45deg);
        bottom: 34px;
        left: -130px;
    }
    .angle-hex-item.item3{
        transform: rotate(77deg);
        bottom: 10px;
        left: -80px;
    }
    .angle-hex-item.item3 img{
        transform: rotate(-90deg);
    }
    .angle-hex-item.item4{
        transform: rotate(45deg);
        bottom: 30px;
        left: 34px;
    }
    .angle-hex-item.item5{
        transform: rotate(-77deg);
        bottom: 10px;
        left: -20px;
    }
    .angle-hex-item.item5 img{
     transform: rotate(90deg);
    }
    .angle-hex-item:after{
        top: -10px;
        border-bottom: 10px solid white;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
    }
    .angle-hex-item:before{
        bottom: -10px;
        border-top: 10px solid white;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
    }
    .angle-hex-item:after,
    .angle-hex-item:before{
        content: "";
        position: absolute;
        width: 0;
        height: 0;
    }
</style>