export default {
    /*
    Сдесь хранятся всплывающие хинты для точек Yandex map
     */
    make_shares_hint: function () {
        // Создание макета содержимого хинта.
        // Макет создается через фабрику макетов с помощью текстового шаблона.
        let HintLayout = ymaps.templateLayoutFactory.createClass(
            "<div class='my-hint'>" +
            "<img src = '{{ properties.imageUrl }}'>"+
            "<p><b>{{ properties.name }}</b>" +
            "<br/>{{ properties.address }}" +
            "<br/>{{ properties.phoneNumber }}" +
            "<br/><b>АКЦИЯ</b> " +
            "</p></div>", {
                // Определяем метод getShape, который
                // будет возвращать размеры макета хинта.
                // Это необходимо для того, чтобы хинт автоматически
                // сдвигал позицию при выходе за пределы карты.
                getShape: function () {
                    var el = this.getElement(),
                        result = null;
                    if (el) {
                        var firstChild = el.firstChild;
                        result = new ymaps.shape.Rectangle(
                            new ymaps.geometry.pixel.Rectangle([
                                [0, 0],
                                [firstChild.offsetWidth, firstChild.offsetHeight]
                            ])
                        );
                    }
                    return result;
                }
            }
        );
        return HintLayout;
    },
    make_service_hint: function () {
        // Создание макета содержимого хинта.
        // Макет создается через фабрику макетов с помощью текстового шаблона.
        let HintLayout = ymaps.templateLayoutFactory.createClass(
            "<div class='my-hint'>" +
            "<img src = '{{ properties.imageUrl[0] }}'>"+
            "<p><b>{{ properties.name }}</b>" +
            "<br/>{{ properties.address }}" +
            "<br/>{{ properties.phoneNumber[0] }}" +
            "<br/><b>{{ properties.price }} Руб.</b>" +
            "</p></div>", {
                // Определяем метод getShape, который
                // будет возвращать размеры макета хинта.
                // Это необходимо для того, чтобы хинт автоматически
                // сдвигал позицию при выходе за пределы карты.
                getShape: function () {
                    var el = this.getElement(),
                        result = null;
                    if (el) {
                        var firstChild = el.firstChild;
                        result = new ymaps.shape.Rectangle(
                            new ymaps.geometry.pixel.Rectangle([
                                [0, 0],
                                [firstChild.offsetWidth, firstChild.offsetHeight]
                            ])
                        );
                    }
                    return result;
                }
            }
        );
        return HintLayout;
    }
}