/**
 * Created by aghumnar on 7/29/2017.
 */
(function () {
    var waypoint = new Waypoint({
        element: document.getElementById('below-navigation'),
        handler: function(direction) {
            var tag = document.getElementById('nav-item');

            if (direction === 'down') {
                tag.className += 'sticky';
            } else {
                tag.className = '';
            }
        }
    })
})();