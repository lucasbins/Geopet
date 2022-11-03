import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';

import { Container } from './styles';

export const DetalheFaq = ({ route }) => {
  const id = route.params.id;

  switch (id) {
    case 1:
      return (
        <SafeAreaView >
          <ScrollView >
            <View style={Container.background}>
              <Text style={Container.title}>Como adicionar um pet!</Text>
              <Text style={Container.text}>
                1 - Precione o botão de + localizado na parte inferior direito da tela.
              </Text>
              <Image
                style={Container.imageS}
                source={{ uri: 'https://cdn.discordapp.com/attachments/897996889495076938/1037841391872639056/pets1.png' }} />
              <Text style={Container.text}>
                2 - Você será redirecionado para tela de cadastro.
              </Text>
              <Image
                style={Container.imageL}
                source={{ uri: 'https://cdn.discordapp.com/attachments/897996889495076938/1037841755241984090/image.png' }} />
              <Text style={Container.text}>
                3 - Informe os dados de seu pet.
              </Text>
              <Image
                style={Container.imageL}
                source={{ uri: 'https://cdn.discordapp.com/attachments/897996889495076938/1037843132051623956/image.png' }} />
              <Text style={Container.text}>
                4 - Precione o botão de Salvar
              </Text>
              <Image
                style={Container.imageS}
                source={{ uri: 'https://cdn.discordapp.com/attachments/897996889495076938/1037843554787131543/image.png' }} />
              <Text style={Container.text}>
                5 - Pronto, agora você pode visulizar seu pet na tela de pets!
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      )
    case 2:
      return (
        <SafeAreaView >
          <ScrollView >
            <View style={Container.background}>
              <Text style={Container.title}>Como remover um pet!</Text>
              <Text style={Container.text}>
                1 - Você deve selecionar o pet que deseja deletar na tela dos 'Meus Pets'.
              </Text>
              <Image
                style={Container.imageS}
                source={{ uri: 'https://media.discordapp.net/attachments/897996889495076938/1037854133870415902/image.png' }} />
              <Text style={Container.text}>
                2 - Voce sera redirecionado para tela de detalhe do pet.
              </Text>
              <Image
                style={Container.imageL}
                source={{ uri: 'https://cdn.discordapp.com/attachments/897996889495076938/1037853627672445059/image.png' }} />
              <Text style={Container.text}>
                3 - Em seguida, presione o botão de deletar no canto inferior da tela.
              </Text>
              <Text style={Container.text}>
                4 - Vai aparecer uma tela de confirmação.
              </Text>
              <Image
                style={Container.imageS}
                source={{ uri: 'https://cdn.discordapp.com/attachments/897996889495076938/1037853774686982304/image.png' }} />
              <Text style={Container.text}>
                5 - Para confirmar precionse 'SIM'.
              </Text>
              <Text style={Container.text}>
                6 - Pronto, você deletou com sucesso!
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      )
    case 3:
      return (
        <SafeAreaView >
          <ScrollView >
            <View style={Container.background}>
              <Text style={Container.title}>Como adicionar uma vacina!</Text>
              <Text style={Container.text}>
                1 - Ao ir para tela de detalhes do Pet.
              </Text>
              <Image
                style={Container.imageL}
                source={{ uri: 'https://cdn.discordapp.com/attachments/897996889495076938/1037853627672445059/image.png' }} />
              <Text style={Container.text}>
                2 - Presione o botão com o icone de uma seringa.
              </Text>
              <Text style={Container.text}>
                3 - Você irá para tela de vacinas.
              </Text>
              <Text style={Container.text}>
                3 - Precione o botão de '+' localizado na parte inferior da tela.
              </Text>
              <Image
                style={Container.imageS}
                source={{ uri: 'https://cdn.discordapp.com/attachments/897996889495076938/1037841391872639056/pets1.png' }} />
              <Text style={Container.text}>
                4 - Você ira redirecionado para tela de cadastro de vacina.
              </Text>
              <Image
                style={Container.imageL}
                source={{ uri: 'https://cdn.discordapp.com/attachments/897996889495076938/1037856769151619155/image.png' }} />
              <Text style={Container.text}>
                5 - Informe os dados da vacina, você poderá incluir uma imagem do rotulo precionando a patinha.
              </Text>
              <Image
                style={Container.imageIcon}
                source={require('../../../assets/icons/PetAvatar.png')} />
              <Text style={Container.text}>
                6 - Após preencher o cadastro presione o botão de salvar.
              </Text>
              <Image
                style={Container.imageS}
                source={{ uri: 'https://cdn.discordapp.com/attachments/897996889495076938/1037843554787131543/image.png' }} />
              <Text style={Container.text}>
                7 - Pronto! Vacina salva com sucesso.
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      )
    case 4:
      return (
        <SafeAreaView >
          <ScrollView >
            <View style={Container.background}>
              <Text style={Container.title}>Como adicionar uma vacina!</Text>
              <Text style={Container.text}>
                1 - Ao ir para tela de detalhes do Pet.
              </Text>
              <Image
                style={Container.imageL}
                source={{ uri: 'https://cdn.discordapp.com/attachments/897996889495076938/1037853627672445059/image.png' }} />
              <Text style={Container.text}>
                2 - Presione o botão com o icone de uma seringa.
              </Text>
              <Text style={Container.text}>
                3 - Você irá para tela de vacinas.
              </Text>
              <Image
                style={Container.imageL}
                source={{ uri: 'https://cdn.discordapp.com/attachments/897996889495076938/1037858822955475025/image.png' }} />
              <Text style={Container.text}>
                3 - Precione a vacina que deseja apagar.
              </Text>
              <Text style={Container.text}>
                4 - Você ira redirecionado para tela de edição de vacina.
              </Text>
              <Image
                style={Container.imageL}
                source={{ uri: 'https://cdn.discordapp.com/attachments/897996889495076938/1037859292126117928/image.png' }} />
              <Text style={Container.text}>
                5 - Para deletar precione o botão vermelho localizado na parte inferior da tela.
              </Text>
              <Text style={Container.text}>
                6 - Em seguida aparecera uma tela de confirmação.
              </Text>
              <Image
                style={Container.imageS}
                source={{ uri: 'https://cdn.discordapp.com/attachments/897996889495076938/1037859968830951485/image.png' }} />
              <Text style={Container.text}>
                7 - Para confirmar presione 'SIM'.
              </Text>
              <Text style={Container.text}>
                7 - Pronto! vacina apagada com sucesso.
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      )
    case 5:
      return (
        <SafeAreaView >
          <ScrollView >
            <View style={Container.background}>
              <Text style={Container.title}>Como localizar uma veterinária!</Text>
              <Text style={Container.text}>
                1 - No menu principal presione o botão 'Localizar Clínicas'.
              </Text>
              <Image
                style={Container.imageL}
                source={{ uri: 'https://cdn.discordapp.com/attachments/897996889495076938/1037860438655905792/image.png' }} />
              <Text style={Container.text}>
                2 - Em seguida Você irá para tela do mapa com as clinicas localizadas.
              </Text>
              <Image
                style={Container.imageL}
                source={{ uri: 'https://cdn.discordapp.com/attachments/897996889495076938/1037861011815927898/image.png' }} />
              <Text style={Container.text}>
                3 - Ao selecionar uma das clinicas localizadas, aparecera o nome e se a clinica está aberta ou fechada.
              </Text>
              <Image
                style={Container.imageL}
                source={{ uri: 'https://cdn.discordapp.com/attachments/897996889495076938/1037861141818384514/image.png' }} />
              <Text style={Container.text}>
                4 - Com a clinica selecionada, aparecera o icone de Rotas do Google, localizado no canto inferior direito.
              </Text>
              <Image
                style={Container.imageIcon}
                source={{ uri: 'https://cdn.discordapp.com/attachments/897996889495076938/1037862595815817216/image.png' }} />
              <Text style={Container.text}>
                5 - Ao presioná-lo será redirecionado para a tela de rotas do google com a melhor trageto para a clínica.
              </Text>
              <Image
                style={Container.imageL}
                source={{ uri: 'https://cdn.discordapp.com/attachments/897996889495076938/1037862841123885096/image.png' }} />
              <Text style={Container.text}>
                6 - Pronto! Agora é so iniciar a viagem.
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      )
    case 6:
      return (
        <SafeAreaView >
          <ScrollView >
            <View style={Container.background}>
              <Text style={Container.title}>Como localizar uma PetShop!</Text>
              <Text style={Container.text}>
                1 - No menu principal presione o botão 'Localizar Clínicas'.
              </Text>
              <Image
                style={Container.imageL}
                source={{ uri: 'https://cdn.discordapp.com/attachments/897996889495076938/1037860438655905792/image.png' }} />
              <Text style={Container.text}>
                2 - Em seguida Você irá para tela do mapa com as clinicas localizadas.
              </Text>
              <Image
                style={Container.imageL}
                source={{ uri: 'https://cdn.discordapp.com/attachments/897996889495076938/1037861011815927898/image.png' }} />
              <Text style={Container.text}>
                3 - Presione o botão 'Filtrar' localizado na parte inferior no centro da tela.
              </Text>
              <Text style={Container.text}>
                4 - Aparecerá uma tela com as informações do filtro.
              </Text>
              <Image
                style={Container.imageL}
                source={{ uri: 'https://cdn.discordapp.com/attachments/897996889495076938/1037863660338552852/image.png' }} />
              <Text style={Container.text}>
                5 - Selecione 'Pet Shop' e logo em seguida presione o botão de buscar.
              </Text>
              <Text style={Container.text}>
                6 - Em seguida Você irá para tela do mapa com as Pet shops localizadas.
              </Text>
              <Text style={Container.text}>
                7 - Ao selecionar uma das Pet shops localizadas, aparecera o nome e se a loja está aberta ou fechada.
              </Text>
              <Image
                style={Container.imageL}
                source={{ uri: 'https://cdn.discordapp.com/attachments/897996889495076938/1037863796766679040/image.png' }} />
              <Text style={Container.text}>
                4 - Com a Loja selecionada, aparecera o icone de Rotas do Google, localizado no canto inferior direito.
              </Text>
              <Image
                style={Container.imageIcon}
                source={{ uri: 'https://cdn.discordapp.com/attachments/897996889495076938/1037862595815817216/image.png' }} />
              <Text style={Container.text}>
                5 - Ao presioná-lo será redirecionado para a tela de rotas do google com a melhor trageto para a Loja.
              </Text>
              <Image
                style={Container.imageL}
                source={{ uri: 'https://cdn.discordapp.com/attachments/897996889495076938/1037864764606521445/image.png' }} />
              <Text style={Container.text}>
                6 - Pronto! Agora é so iniciar a viagem.
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      )
    default:
      return (
        <View style={Container.background}>
          <Text style={Container.erro}>404 - Não foi possível encontrar ajuda!</Text>
        </View>
      )
  }
}