/*
 * @Author: Fred.Hu
 * @Date: 2017-10-26 09:30:22
 * @Last Modified by: Fred.Hu
 * @Last Modified time: 2018-02-28
 */

// 提示弹窗
function noticeError(WaringMes) {
    $("#notice").fadeOut();
    $("#notice").remove();

    $('body').append('' +
        '<div id="notice" class="notice notice-error" hidden>' +
        '<div>' + WaringMes + '</div>' +
        '<i onclick="$(this).closest($(\'#notice\')).fadeOut(\'slow\');" class="fa fa-times" aria-hidden="true"></i>' +
        '</div>');
    $("#notice").fadeIn();

    setTimeout(function() {
        $("#notice").fadeOut('slow');
    }, 5000);
}

function noticeSuccess(WaringMes) {
    $("#notice").fadeOut();
    $("#notice").remove();

    $('body').append('' +
        '<div id="notice" class="notice notice-success" hidden>' +
        '<div>' + WaringMes + '</div>' +
        '<i onclick="$(this).closest($(\'#notice\')).fadeOut(\'slow\');" class="fa fa-times" aria-hidden="true"></i>' +
        '</div>');
    $("#notice").fadeIn();

    setTimeout(function() {
        $("#notice").fadeOut('slow');
    }, 5000);
}

function noticeWarning(WaringMes) {
    $("#notice").fadeOut();
    $("#notice").remove();

    $('body').append('' +
        '<div id="notice" class="notice notice-warning" hidden>' +
        '<div>' + WaringMes + '</div>' +
        '<i onclick="$(this).closest($(\'#notice\')).fadeOut(\'slow\');" class="fa fa-times" aria-hidden="true"></i>' +
        '</div>');
    $("#notice").fadeIn();

    setTimeout(function() {
        $("#notice").fadeOut('slow');
    }, 5000);
}

function noticeSecondary(WaringMes) {
    $("#notice").fadeOut();
    $("#notice").remove();

    $('body').append('' +
        '<div id="notice" class="notice notice-secondary" hidden>' +
        '<div>' + WaringMes + '</div>' +
        '<i onclick="$(this).closest($(\'#notice\')).fadeOut(\'slow\');" class="fa fa-times" aria-hidden="true"></i>' +
        '</div>');
    $("#notice").fadeIn();

    setTimeout(function() {
        $("#notice").fadeOut('slow');
    }, 5000);
}

function noticeAndroid(WaringMes) {
    $("#notice").fadeOut();
    $("#notice").remove();

    $('body').append('' +
        '<div id="notice" class="notice-Android" hidden>' +
        '<div>' + WaringMes + '</div>' +
        '</div>');
    $("#notice").fadeIn();

    setTimeout(function() {
        $("#notice").fadeOut('slow');
    }, 5000);
}

//modern风格输入框
$(function () {
    if ($('.modern-text').val() !== "") {
        $(this).parent().find($('.placeholder')).css('display', 'none');
    }

    $('.modern-text').on("blur", function(){
        if ($('.modern-text').val() !== "") {
            $(this).parent().find($('.placeholder')).css('display','none');
        } else {
            $(this).parent().find($('.placeholder')).css('display','block');
        }
    });
    $('.modern-text').on("focus", function(){
        if ($('.modern-text').val() !== "") {
            $(this).parent().find($('.placeholder')).css('display', 'none');
        } else {
            $(this).parent().find($('.placeholder')).css('display', 'block');
        }
    });
})
