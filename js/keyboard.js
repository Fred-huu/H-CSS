/*
 * @Author: Fred.Hu
 * @Date: 2018-07-27
 * @Last Modified by: Fred.Hu
 * @Last Modified time: 2018-07-27
 */

!(function () {
    var keyboard = function (options) {
        this.options = $.extend({
            'bottom': '0'
        }, options);
        this.init();
    };

    keyboard.prototype.init = function () {
        var bottom = this.options.bottom;

        var _whichInput, _whichType;

        $(document).click(function (e) {

            // 点击任何地方都隐藏
            $('#Jkeyboard').hide();
            $('#Jkeyboard').animate({bottom: '-250px'});
            $('#Jkeyboard').remove();
            // 页面变回原来的高度
            $('html').css('height', 'auto');
        });

        function Jkeyboard(input, type) {
            // 哪一个input被选中
            var _input = input;
            // 选中的是什么类型
            var _type = type;
            // 记录页面原来的高度
            var _htmlHeight = $('html').height();

            // 虚拟键盘
            function addJkeyboardDOM() {
                var str = '<ul id="Jkeyboard">';
                str += '<li>1</li>';
                str += '<li>2</li>';
                str += '<li>3</li>';
                str += '<li>4</li>';
                str += '<li>5</li>';
                str += '<li>6</li>';
                str += '<li>7</li>';
                str += '<li>8</li>';
                str += '<li>9</li>';
                if (type == 'money') {
                    str += '<li>.</li>';
                }else if (type == 'id') {
                    str += '<li>x</li>';
                } else {
                    str += '<li class="diClick"></li>';
                }
                str += '<li>0</li>';
                str += '<li class="Jkeyboard-delete">删除</li>';
                str += '</ul>';
                $('body').append(str)
            }

            // 格式化数据
            function format(val, type) {
                switch (type) {
                    // 银行【每4个数字空一格】
                    case 'bank':
                        return val.replace(/[^0-9]|\s/g, '').substr(0, 18).replace(/([0-9]{4})/g, '$1 ');
                    // 手机号
                    case 'phone':
                        return val.replace(/[^0-9]|\s/g, '').substr(0, 11).substr(0, 11);
                    // 金额，保留两位小数
                    case 'money':
                        return val.replace(/^0{2,}/, '0').replace(/^\./g, '0.').replace(/\.{2,}/, '.').replace(/([0-9]*\.[0-9]{2}).*$/, '$1');
                    // 身份证
                    case 'id':
                        return val.substr(0, 18).substr(0, 18);
                    default:
                        return val.replace(/[^0-9]|\s/g, '')
                }
            }

            // 删除键
            function deleteTab(val, type) {
                switch (type) {
                    // 银行
                    case 'bank':
                        return val.replace(/[^0-9]|\s/g, '').substr(0, val.replace(/[^0-9]|\s/g, '').length - 1).replace(/([0-9]{4})/g, '$1 ');
                    // 手机号
                    case 'phone':
                        return val.replace(/[^0-9]|\s/g, '').substr(0, val.length - 1);
                    // 金额
                    case 'money':
                        return val.substr(0, val.length - 1);
                    // 身份证
                    case 'id':
                        return val.substr(0, val.length - 1);
                    default:
                        return val.substr(0, val.length - 1)
                }
            }

            $(_input).click(function (e) {
                $('#Jkeyboard').remove();
                // 阻止冒泡
                e.stopPropagation();

                // 哪一个input被选中
                _whichInput = this;
                // 选中的是什么类型
                _whichType = _type;

                // 没有虚拟键盘的时候append
                if ($('#Jkeyboard')[0] === undefined) {
                    // append
                    addJkeyboardDOM();

                    // 阻止冒泡
                    $('#Jkeyboard').click(function (e) {
                        e.stopPropagation();
                    });

                    // 不是删除键事件
                    $('#Jkeyboard li:not(.Jkeyboard-delete)').click(function () {
                        // input里原有的值 + 新输入的值
                        var _val = $(_whichInput).val() + $(this).text();
                        // 格式化
                        $(_whichInput).val(format(_val, _whichType))
                    });

                    // 删除键事件
                    $('#Jkeyboard li.Jkeyboard-delete').click(function () {
                        // input里原有的值
                        var _val = $(_whichInput).val();
                        // 删除一格
                        $(_whichInput).val(deleteTab(_val, _whichType))
                    });
                }

                //$(this).css('border', '2px solid #3bb0ef')
                var offsetTop = $(this).offset().top - 6;
                var animate = 0;
                //主要是针对新版iOS的微信网页底部会有前进后退菜单栏
                if (browser.versions.ios && browser.versions.weixin) {
                    bottom -= 20;
                    animate += 20;
                    $('#Jkeyboard').css('bottom', '20px');//随便写的，以后有ios设备了再测试修改
                    if (bottom < 0) {
                        bottom = 0;
                        $('body').css('padding-bottom', '20px');
                    }
                } else {
                    if (bottom < 0) {
                        bottom = 0;
                    }
                }

                // 页面增加高度(输入框的高度) 防止挡住某些区域
                $('html').css('height', _htmlHeight + $('#Jkeyboard').height() - bottom + 'px');
                $('html').scrollTop(offsetTop);
                $('#Jkeyboard').show();
                $('#Jkeyboard').animate({bottom: animate + 'px'});
            })

        }

        new Jkeyboard($('input[bank]'), 'bank');
        new Jkeyboard($('input[phone]'), 'phone');
        new Jkeyboard($('input[money]'), 'money');
        new Jkeyboard($('input[id]'), 'id');
    };

    window.keyboard = keyboard;
})();