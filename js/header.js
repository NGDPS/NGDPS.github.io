const header = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired, // name of link
        url: React.PropTypes.string.isRequired // url of link
    },

    render: function() {
        return React.DOM.li(null,
            React.DOM.a({
                href: this.props.url,
                className: 'header_link'
            }, this.props.name)
        );
    }
});

ReactDOM.render(
    React.DOM.div({
        className: 'container'
    }, React.DOM.div({
        className: 'header_body'
    }, React.DOM.a({
        className: 'logo',
        href: '/'
    }, React.DOM.img({
        src: './img/logo.png'
    }), React.DOM.p({
        className: 'text'
    }, 'SunsetGDPS')), React.DOM.div({
        className: 'hamburger',
        id: 'hamburger'
    }, React.DOM.span(null)), React.DOM.nav({
        className: 'header_menu',
        id: 'menu'
    }, React.DOM.ul({
        className: 'header_list'
    }, 
        React.createElement(header, {
            name: 'Home',
            url: './index.html'
        }),
        React.createElement(header, {
            name: 'Rules',
            url: './rules.html'
        }),
        React.createElement(header, {
            name: 'Admins',
            url: './adms.html'
        }),
    )))),
    document.getElementById('header')
);