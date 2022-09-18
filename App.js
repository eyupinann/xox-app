import {useState} from "react";
import {Text, TouchableOpacity, Button} from 'react-native';
import {VStack, HStack, Flex} from "react-native-flex-layout";
import CheckWinner from "./checkWinner";
import checkWinner from "./checkWinner";

function Box({value, onPress, disabled ,highlighted}) {
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress}>
            <Flex w={96} h={96} center style={{backgroundColor: highlighted ? "lightgreen":"lightgray"}}>
                <Text style={{fontSize:46}}>{value}</Text>
            </Flex>
        </TouchableOpacity>
    );
}

function App() {
    const [currentPlayer, setCurrentPlayer] = useState("X");

    const [board, setBoard] =useState(Array(9).fill(null));

    const [highlighted, setHighlighted] = useState([]);

    const [winner, setWinner] = useState(null);

    const handlePress = (index) => {
        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        const winnerLine = checkWinner(newBoard);

        if (winnerLine)
        {
            setHighlighted(winnerLine);
            setWinner(currentPlayer);
            alert(`${currentPlayer} win!`);
        }else {
            setCurrentPlayer((prev) => (prev === "X" ? "0" : "X"));

        }

    };

    const handleReset = () => {
        setCurrentPlayer("X");
        setBoard(Array(9).fill(null));
        setHighlighted([]);
        setWinner(null);
    }

    const getBox = (index) => (
        <Box
            value={[board[index]]}
            onPress={() => handlePress(index)}
            highlighted={highlighted.includes(index)}
            disabled={winner || board[index]}
        />
    )

    return(
    <VStack fill center spacing={9}>
        <Text style={{fontSize:30}}>
            {currentPlayer} toPlay
        </Text>
        <HStack spacing={9} shouldWrapChildren>
            {getBox(0)}
            {getBox(1)}
            {getBox(2)}
        </HStack>
        <HStack spacing={9} shouldWrapChildren>
            {getBox(3)}
            {getBox(4)}
            {getBox(5)}
        </HStack>
        <HStack spacing={9} shouldWrapChildren>
            {getBox(6)}
            {getBox(7)}
            {getBox(8)}
        </HStack>
        <Button title={"Reset"} onPress={handleReset}/>
    </VStack>
    );
}

export default App;
