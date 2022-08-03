
function Button(props: any) {

    let type: 'button' | 'submit' | 'reset' = props.type || 'button'; // potrei mettere any ma non è molto preciso
    let classList = ['button-component', 'btn', (props.classBt || 'btn-primary')];
    let text = props.text || 'Salva';

    const clickHandler = () => {
        console.log('clicked')
        props.clickAction && props.clickAction(); // se ci sono clickAction allora eseguo clickAction e se non ci sono clickAction non faccio nulla
    }

    return <button 
                   type={type} 
                   onClick={clickHandler}
                   className={classList.join(' ')}>{props.children || text}
           </button>; // props.children resituisce l html inserito direttamente nel tag Button nell App.tsx
}

export const test = 'Mario';
export const m = 'm';
export default Button;