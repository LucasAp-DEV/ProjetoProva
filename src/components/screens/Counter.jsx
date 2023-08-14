const Counter = () => {

    
  const [contador, setContador] = useState(1)

  //Button normal montagem

  useEffect(() => {
    console.log('Montagem')
  }, [])

  useEffect(() => {
    console.log('Atualizado')
  }, [contador])

  const onPressButton = () => {
    setContador( contador + 1)
  }

  const onPressButton2 = () => {
    setContador( contador - 2)
  }
  

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.text}>{contador}</Text>
      <MyButton title='CONTADOR +1' onPressButton={onPressButton}/>
      <MyButton title='CONTADOR -1' onPressButton={onPressButton2}/>
    </SafeAreaView>
  );
}


export default Counter;