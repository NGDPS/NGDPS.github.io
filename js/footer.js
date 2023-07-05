const Footer = React.createClass({
    render: function() {
        return React.DOM.hr(null),
        React.DOM.div({
            className: 'footer-row'
        }, React.DOM.div({
            className: 'footer-links'
        }, React.DOM.div(null, 
            React.DOM.h2(null, 'Общее'),
            React.DOM.ul(null, 
                React.DOM.li(null, 
                    React.DOM.a({
                        className: 'footer-link',
                        href: 'https://discord.gg/8CmgMu5Khq'
                    }, 'Discord'),
                React.DOM.li(null, 
                    React.DOM.a({
                        className: 'footer-link',
                        href: 'https://www.youtube.com/@SunSetGDPS'
                    }, 'YouTube')),
                React.DOM.li(null, 
                    React.DOM.a({
                        className: 'footer-link',
                        href: 'https://gofruit.space/gdps/00oh'
                    }, 'Download')),
            ))
        ), React.DOM.div(null, 
            React.DOM.h2(null, 'Разработчик'),
            React.DOM.ul(null, 
                React.DOM.li(null, 
                    React.DOM.a({
                        className: 'footer-link',
                        href: 'https://github.com/EvAyako'
                    }, 'GitHub'),
                )    
            ) 
        )), React.DOM.div({
            className: 'copyright'
        }, '© SunsetGDPS 2023'));
    }
});

ReactDOM.render(
    React.createElement(Footer),
    document.getElementById('footer')
);
