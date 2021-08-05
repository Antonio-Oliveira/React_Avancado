import React, { Component } from "react";

class Twitter extends Component {

    state = {
        tweet: "title",
        test: true
    }

    componentDidMount() { // depois do render
        const { posts, loading } = this.props;
        console.log("componentDidMount-props", posts);
        console.log("componentDidMount-loading", loading);
    }

    componentDidUpdate(prevProps) { // quando têm atualizações
        const { loading } = this.props;
        if (this.props.loading !== prevProps.loading) {
            console.log("componentDidUpdate-loading", loading);
        }
    }

    componentWillUnmount() { // quando os componentes são destruídos
        console.log("componentWillUnmount: fui removido :D");
    }

    shouldComponentUpdate(nextProps, nextState) { // Verifica se pode renderizar os componentes novamente
        console.log(this.state.tweet + " - " + nextState.tweet)
        console.log("teste: "+ this.state.test);
        return this.state.tweet !== nextState.tweet;
    }

    tweet = () => {
        this.setState({
            tweet: true
        })
    }

    onRemoveTitle = () => {
        this.state.test = !this.state.test;
    }

    render() {
        const { posts } = this.props;
        console.log("Render: ", posts);

        return (
            <div>
                <button onClick={this.tweet}>Re-render</button>
                <button onClick={this.onRemoveTitle}>Remover title</button>

                {this.state.test && (

                    <p>Title</p>
                )}
            </div>
        )
    }
}

export default Twitter;