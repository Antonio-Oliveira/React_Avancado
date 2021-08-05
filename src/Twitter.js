import React, { useEffect, memo, useState } from "react";

// shouldComponentUpdate, so que ó inverso, ele só atualizara quando for false
const areEqual = (prevProps, nextProps) => {
    return prevProps.loading === nextProps.loading;
}

function Twitter(props) {

    const { loading } = props;
    const [tweet, setTweet] = useState();

    // componentDidMount
    useEffect(() => { // depois do render
        const { posts, loading } = props;
        console.log("componentDidMount-props", posts);
        console.log("componentDidMount-loading", loading);
    }, []);

    // componentDidUpdate
    useEffect(() => { // quando têm atualizações
        console.log("componentDidUpdate-loading", loading);
    }, [loading]);

    // componentWillUnmount
    useEffect(() => { // Chamado imediatamente após um componente ser destruído.
        return () => {
            console.log("componentWillUnmount: fui removido :D");
        }
    }, []);


    /* 
    shouldComponentUpdate = (nextProps, nextState) => { // Verifica se pode renderizar os componentes novamente
        console.log(state.tweet + " - " + nextState.tweet)
        console.log("teste: " + state.test);
        return state.tweet !== nextState.tweet;
    }
    */
    const handleTweet = () => {
        setTweet("Tweet atualizado")
    } 


    console.log("Tweet atualizado", tweet)
    return (
        <div>
             <button onClick={handleTweet}>Re-render</button>
            tests
        </div>
    )

}

export default memo(Twitter, areEqual);