
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Autocomplete from '@mui/material/Autocomplete';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import Fade from '@mui/material/Fade';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SpeedIcon from '@mui/icons-material/Speed';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ConstructionIcon from '@mui/icons-material/Construction';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import Menu from '@mui/material/Menu';
import { Container, AppBar, Toolbar, Typography, Button, Box, Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';

// Mock de modelos e versões por marca (deve ficar fora do App para escopo global)
const modelosPorMarca = {
  'Fiat': ['Argo', 'Pulse', 'Fiorino'],
  'Chevrolet': ['Onix', 'Tracker', 'S10'],
  'Volkswagen': ['Gol', 'T-Cross', 'Virtus'],
  'Toyota': ['Corolla', 'Yaris', 'Hilux'],
  'Honda': ['Civic', 'HR-V', 'Fit'],
  'Ford': ['Ka', 'Ranger', 'EcoSport'],
};
const versoesPorModelo = {
  'Argo': ['1.0', '1.3 Drive', 'Trekking'],
  'Pulse': ['Drive', 'Audace', 'Impetus'],
  'Fiorino': ['Endurance', 'Hard Working'],
  'Onix': ['LT', 'LTZ', 'Premier'],
  'Tracker': ['Turbo', 'Premier'],
  'S10': ['LS', 'LT', 'High Country'],
  'Gol': ['1.0', '1.6 MSI'],
  'T-Cross': ['200 TSI', '250 TSI'],
  'Virtus': ['Comfortline', 'Highline'],
  'Corolla': ['GLi', 'XEi', 'Altis'],
  'Yaris': ['XL', 'XS', 'XLS'],
  'Hilux': ['SR', 'SRV', 'SRX'],
  'Civic': ['Sport', 'EXL', 'Touring'],
  'HR-V': ['EX', 'EXL', 'Touring'],
  'Fit': ['DX', 'EX', 'EXL'],
  'Ka': ['SE', 'SEL'],
  'Ranger': ['XL', 'XLT', 'Limited'],
  'EcoSport': ['SE', 'Storm'],
};

function App() {
  // Estado para marcas selecionadas (array de objetos: {nome, logo})
  const [marcasSelecionadas, setMarcasSelecionadas] = React.useState([]);

  // Lista de marcas disponíveis (atualizada)
  const marcasDisponiveis = [
    { nome: 'Chevrolet', logo: 'logochevrolet.png' },
    { nome: 'Fiat', logo: 'logofiat.png' },
    { nome: 'Ford', logo: 'logoford.png' },
    { nome: 'Honda', logo: 'logohonda.png' },
    { nome: 'Hyundai', logo: 'logohyundai.png' },
    { nome: 'Mitsubishi', logo: 'logomitsubishi.png' },
    { nome: 'Renault', logo: 'logorenault.png' },
    { nome: 'Toyota', logo: 'logotoyota.png' },
    { nome: 'Volkswagen', logo: 'logovolkswagen.png' },
    { nome: 'Jeep', logo: 'logojeep.png' },
    { nome: 'Nissan', logo: 'logonissan.png' },
    { nome: 'Peugeot', logo: 'logopeugeot.png' },
    { nome: 'Citroën', logo: 'logocitroen.png' },
    { nome: 'Kia', logo: 'logokia.png' },
    { nome: 'BMW', logo: 'logobmw.png' },
    { nome: 'Mercedes-Benz', logo: 'logomercedes.png' },
    { nome: 'Audi', logo: 'logoaudi.png' },
    { nome: 'Land Rover', logo: 'logolandrover.png' },
    { nome: 'Volvo', logo: 'logovolvo.png' },
    { nome: 'Chery', logo: 'logochery.png' },
    { nome: 'Ram', logo: 'logoram.png' },
    { nome: 'JAC', logo: 'logojac.png' },
    { nome: 'Subaru', logo: 'logosubaru.png' },
    { nome: 'Suzuki', logo: 'logosuzuki.png' },
    { nome: 'Mini', logo: 'logomini.png' },
    { nome: 'Porsche', logo: 'logoporsche.png' },
    { nome: 'Lexus', logo: 'logolexus.png' },
    { nome: 'Jaguar', logo: 'logojaguar.png' },
    { nome: 'Dodge', logo: 'logododge.png' },
    { nome: 'BYD', logo: 'logobyd.png' },
    { nome: 'Tesla', logo: 'logotesla.png' },
  ];
  // Modelos por marca (atualizado)
  const modelosPorMarca = {
    'Chevrolet': ['Onix', 'Tracker', 'S10', 'Spin', 'Cruze', 'Montana', 'Equinox'],
    'Fiat': ['Argo', 'Pulse', 'Toro', 'Strada', 'Mobi', 'Cronos', 'Fastback'],
    'Ford': ['Ranger', 'Ka', 'EcoSport', 'Territory', 'Fusion', 'Mustang'],
    'Honda': ['Civic', 'HR-V', 'City', 'Fit', 'WR-V'],
    'Hyundai': ['HB20', 'Creta', 'Tucson', 'Santa Fe', 'Azera'],
    'Mitsubishi': ['Pajero Sport', 'L200 Triton', 'ASX', 'Outlander'],
    'Renault': ['Kardian', 'Oroch', 'Duster', 'Kwid', 'Captur', 'Sandero'],
    'Toyota': ['Corolla', 'Hilux', 'Yaris', 'SW4', 'RAV4'],
    'Volkswagen': ['T-Cross', 'Nivus', 'Polo', 'Virtus', 'Saveiro', 'Taos'],
    'Jeep': ['Compass', 'Renegade', 'Commander', 'Wrangler'],
    'Nissan': ['Kicks', 'Frontier', 'Versa', 'Sentra'],
    'Peugeot': ['208', '2008', '3008', 'Partner'],
    'Citroën': ['C3', 'C4 Cactus', 'Aircross'],
    'Kia': ['Sportage', 'Cerato', 'Seltos', 'Stonic'],
    'BMW': ['320i', 'X1', 'X3', 'X5', 'Z4'],
    'Mercedes-Benz': ['GLA', 'GLC', 'Classe C', 'Classe A'],
    'Audi': ['A3', 'Q3', 'Q5', 'A4'],
    'Land Rover': ['Range Rover Evoque', 'Discovery Sport', 'Defender'],
    'Volvo': ['XC40', 'XC60', 'XC90', 'S60'],
    'Chery': ['Tiggo 5X', 'Tiggo 8', 'Arrizo 6'],
    'Ram': ['1500', '2500', 'Classic'],
    'JAC': ['T40', 'T50', 'E-JS1'],
    'Subaru': ['XV', 'Forester', 'Outback'],
    'Suzuki': ['Jimny', 'Vitara', 'S-Cross'],
    'Mini': ['Cooper', 'Countryman'],
    'Porsche': ['911', 'Cayenne', 'Macan'],
    'Lexus': ['UX 250h', 'NX 350h', 'ES 300h'],
    'Jaguar': ['E-Pace', 'F-Pace', 'XE'],
    'Dodge': ['Ram 2500', 'Durango', 'Journey'],
    'BYD': ['Song Plus', 'Yuan Plus', 'Dolphin'],
    'Tesla': ['Model 3', 'Model Y', 'Model S'],
  };

  // Versões por modelo (atualizado)
  const versoesPorModelo = {
    'Onix': ['LT 1.0', 'LTZ 1.0 Turbo', 'Premier 1.0 Turbo'],
    'Tracker': ['LT', 'LTZ', 'Premier'],
    'S10': ['Advantage', 'LT', 'High Country'],
    'Argo': ['Drive 1.0', 'Trekking 1.3', 'Precision 1.8'],
    'Pulse': ['Drive', 'Audace', 'Impetus'],
    'Toro': ['Endurance', 'Freedom', 'Volcano'],
    'Ranger': ['XL', 'XLT', 'Limited'],
    'Ka': ['SE 1.0', 'SE Plus 1.5', 'Titanium 1.5'],
    'EcoSport': ['SE', 'FreeStyle', 'Titanium'],
    'Civic': ['EX', 'EXL', 'Touring'],
    'HR-V': ['EX', 'EXL', 'Touring'],
    'City': ['EX', 'EXL', 'Touring'],
    'Fit': ['DX', 'EX', 'EXL'],
    'HB20': ['Sense', 'Vision', 'Evolution'],
    'Creta': ['Action', 'Limited', 'Platinum'],
    'Tucson': ['GLS', 'Limited', 'Ultimate'],
    'Pajero Sport': ['HPE', 'HPE-S', 'Legend'],
    'L200 Triton': ['GL', 'GLS', 'HPE'],
    'Kardian': ['Evolution', 'Techno', 'Premiere'],
    'Oroch': ['Pro', 'Intense', 'Outsider'],
    'Duster': ['Zen', 'Intense', 'Iconic'],
    'Corolla': ['GLi', 'XEi', 'Altis'],
    'Hilux': ['SR', 'SRV', 'SRX'],
    'T-Cross': ['Sense', 'Comfortline', 'Highline'],
    'Nivus': ['Comfortline', 'Highline'],
    'Compass': ['Sport', 'Longitude', 'Limited'],
    'Renegade': ['Sport', 'Longitude', 'Trailhawk'],
    'Commander': ['Limited', 'Overland'],
    'Kicks': ['Active', 'Advance', 'Exclusive'],
    'Frontier': ['S', 'Attack', 'XE', 'Platinum'],
    '208': ['Like', 'Active', 'Griffe'],
    '2008': ['Allure', 'Griffe', 'Style'],
    'C3': ['Live', 'Feel', 'First Edition'],
    'C4 Cactus': ['Live', 'Feel', 'Shine'],
    'Sportage': ['EX', 'LX', 'SX'],
    '320i': ['GP', 'Sport GP', 'M Sport'],
    'GLA': ['200', '250', 'AMG 35'],
    'A3': ['Sedan Prestige', 'Sedan Performance', 'Sportback'],
    'Q3': ['Prestige', 'Performance', 'Black'],
    'Range Rover Evoque': ['SE', 'R-Dynamic', 'HSE'],
    'XC40': ['Momentum', 'Inscription', 'R-Design'],
    'Tiggo 5X': ['TXS', 'T', 'PRO'],
    '1500': ['Laramie', 'Limited', 'Rebel'],
    'T40': ['Plus', 'JetFlex'],
    'XV': ['AWD', 'S'],
    'Jimny': ['4Work', '4Sport', 'Sierra'],
    'Cooper': ['S', 'John Cooper Works'],
    '911': ['Carrera', 'Turbo S'],
    'UX 250h': ['Dynamic', 'Luxury'],
    'E-Pace': ['S', 'SE', 'HSE'],
    'Ram 2500': ['Laramie', 'Limited'],
    'Song Plus': ['GL', 'GS'],
    'Model 3': ['Standard', 'Long Range', 'Performance'],
    // ...adicione mais conforme necessário...
  };

  // Adicionar mais uma marca (abre grid de seleção)
  const [adicionandoMarca, setAdicionandoMarca] = React.useState(false);
  // Estado para exibir o seletor de todas as marcas
  const [showAllBrands, setShowAllBrands] = React.useState(false);
  const [brandSearch, setBrandSearch] = React.useState("");

  function handleRemoverMarca(nome) {
    setMarcasSelecionadas(marcasSelecionadas.filter(m => m.nome !== nome));
  }

  function handleAdicionarMarca(marcaObj) {
    if (!marcaObj) return;
    if (!marcasSelecionadas.some(m => m.nome === marcaObj.nome)) {
      setMarcasSelecionadas([...marcasSelecionadas, marcaObj]);
    }
    setAdicionandoMarca(false);
  }
  // Ordenação dos cards
  const [orderAnchorEl, setOrderAnchorEl] = React.useState(null);
  const [orderBy, setOrderBy] = React.useState('Menor preço');
  const orderOptions = [
    'Mais relevantes',
    'Maior preço',
    'Menor preço',
    'Ano mais novo',
    'Menor Km',
  ];
  const handleOrderClick = (event) => {
    setOrderAnchorEl(event.currentTarget);
  };
  const handleOrderClose = () => {
    setOrderAnchorEl(null);
  };
  const handleOrderSelect = (option) => {
    setOrderBy(option);
    setOrderAnchorEl(null);
  };

  // Estados para os inputs de preço
  const [precoMin, setPrecoMin] = React.useState("");
  const [precoMax, setPrecoMax] = React.useState("");

  // Estados para filtro de ano
  const [anoMin, setAnoMin] = React.useState("");
  const [anoMax, setAnoMax] = React.useState("");
  const [anoSelecionado, setAnoSelecionado] = React.useState(null);
  const [anoMinError, setAnoMinError] = React.useState("");
  const [anoMaxError, setAnoMaxError] = React.useState("");

  // Ano atual para validação
  const anoAtual = new Date().getFullYear();

  // Função de validação de ano
  function validateAno(value) {
    if (!value) return "";
    if (!/^[0-9]{1,4}$/.test(value)) return "Ano inválido";
    const n = parseInt(value);
    if (n < 1900 || n > anoAtual + 1) return "Ano inválido";
    return "";
  }

  // Função para limpar todos os filtros controlados
  function handleClearAll() {
    setSearch("");
    setLocations([]);
    setPrecoMin("");
    setPrecoMax("");
    setAnoMin("");
    setAnoMax("");
    setAnoSelecionado(null);
    // Adicione aqui outros filtros controlados por estado se necessário
  }

  // Função para formatar como moeda Real sem centavos
  function formatReal(value) {
    if (!value) return "";
    // Remove tudo que não for número
    let clean = value.replace(/\D/g, "");
    // Remove zeros à esquerda
    clean = clean.replace(/^0+/, "");
    if (clean === "") clean = "0";
    // Formata milhar
    let int = clean.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `R$ ${int}`;
  }

  // Função para tratar input e manter só números
  function handlePrecoChange(setValue) {
    return (e) => {
      let val = e.target.value.replace(/\D/g, "");
      setValue(val);
    };
  }


  // Estado do campo de busca
  const [search, setSearch] = React.useState("");
  // Estado do campo de localização (cidades selecionadas)
  const [locations, setLocations] = React.useState([]);
  const [locationInput, setLocationInput] = React.useState("");
  // Lista de cidades/estados para autocomplete (mock)
  const cityOptions = [
    'São Paulo, SP',
    'Curitiba, PR',
    'Belo Horizonte, MG',
    'Mineiros do Tietê - SP',
    'Tietê - SP',
    'Rio de Janeiro, RJ',
    'Porto Alegre, RS',
    'Salvador, BA',
    'Fortaleza, CE',
    'Brasília, DF',
    'Campinas, SP',
    'Santos, SP',
    'Guarulhos, SP',
    'Sorocaba, SP',
    'São Bernardo do Campo, SP',
    'Osasco, SP',
    'Ribeirão Preto, SP',
    'São José dos Campos, SP',
    'Uberlândia, MG',
    'Contagem, MG',
    'Betim, MG',
    'Juiz de Fora, MG',
    'Joinville, SC',
    'Florianópolis, SC',
    'Blumenau, SC',
    'Londrina, PR',
    'Maringá, PR',
    'Cascavel, PR',
    'Recife, PE',
    'Olinda, PE',
    'Jaboatão dos Guararapes, PE',
    'Natal, RN',
    'João Pessoa, PB',
    'Maceió, AL',
    'Aracaju, SE',
    'Belém, PA',
    'Manaus, AM',
    'Boa Vista, RR',
    'Palmas, TO',
    'Macapá, AP',
    'Cuiabá, MT',
    'Campo Grande, MS',
    'Goiânia, GO',
    'Anápolis, GO',
    'Aparecida de Goiânia, GO',
    'Vila Velha, ES',
    'Vitória, ES',
    'Caxias do Sul, RS',
    'Pelotas, RS',
    'Santa Maria, RS',
    'Niterói, RJ',
    'Duque de Caxias, RJ',
    'Nova Iguaçu, RJ',
    'São Gonçalo, RJ',
    'Campos dos Goytacazes, RJ',
    'Teresina, PI',
    'São Luís, MA',
    'Porto Velho, RO',
    'Rio Branco, AC',
    'Patos de Minas, MG',
    'Franca, SP',
    'Barueri, SP',
    'Carapicuíba, SP',
    'Itu, SP',
    'Jundiaí, SP',
    'Taubaté, SP',
    'Marília, SP',
    'Presidente Prudente, SP',
    'São Carlos, SP',
    'Piracicaba, SP',
    'Bauru, SP',
    'Araraquara, SP',
    'Sertãozinho, SP',
    'Americana, SP',
    'Itapetininga, SP',
    'Itapeva, SP',
    'Ourinhos, SP',
    'Avaré, SP',
    'Botucatu, SP',
    'Lençóis Paulista, SP',
    'Jaú, SP',
    'Assis, SP',
    'Catanduva, SP',
    'Votuporanga, SP',
    'Fernandópolis, SP',
    'Andradina, SP',
    'Birigui, SP',
    'Penápolis, SP',
    'Lins, SP',
    'Araçatuba, SP',
    'Barretos, SP',
    'Taquaritinga, SP',
    'Matão, SP',
    'Batatais, SP',
    'Mococa, SP',
    'Casa Branca, SP',
    'São João da Boa Vista, SP',
    'Mogi das Cruzes, SP',
    'Suzano, SP',
    'Poá, SP',
    'Ferraz de Vasconcelos, SP',
    'Itaquaquecetuba, SP',
    'Guarujá, SP',
    'Praia Grande, SP',
    'São Vicente, SP',
    'Cubatão, SP',
    'Mauá, SP',
    'Santo André, SP',
    'São Caetano do Sul, SP',
    'Diadema, SP',
    'Taboão da Serra, SP',
    'Embu das Artes, SP',
    'Itapecerica da Serra, SP',
    'Cotia, SP',
    'Santana de Parnaíba, SP',
    'Itapevi, SP',
    'Jandira, SP',
    'Vargem Grande Paulista, SP',
    'Caieiras, SP',
    'Franco da Rocha, SP',
    'Francisco Morato, SP',
    'Mairiporã, SP',
    'Atibaia, SP',
    'Bragança Paulista, SP',
    'Extrema, MG',
    'Pouso Alegre, MG',
    'Itajubá, MG',
    'Varginha, MG',
    'Alfenas, MG',
    'Passos, MG',
    'Três Corações, MG',
    'Lavras, MG',
    'Sete Lagoas, MG',
    'Divinópolis, MG',
    'Itaúna, MG',
    'Pará de Minas, MG',
    'Formiga, MG',
    'Araxá, MG',
    'Patrocínio, MG',
    'Uberaba, MG',
    'Arapiraca, AL',
    'Caruaru, PE',
    'Petrolina, PE',
    'Cabo de Santo Agostinho, PE',
    'Paulista, PE',
    'Camaragibe, PE',
    'Garanhuns, PE',
    'Santa Cruz do Capibaribe, PE',
    'Serra Talhada, PE',
    'Vitória de Santo Antão, PE',
    'Gravatá, PE',
    'Palmeira dos Índios, AL',
    'Rio Largo, AL',
    'Parnamirim, RN',
    'Mossoró, RN',
    'Caucaia, CE',
    'Maracanaú, CE',
    'Sobral, CE',
    'Juazeiro do Norte, CE',
    'Crato, CE',
    'Iguatu, CE',
    'Quixadá, CE',
    'Russas, CE',
    'Itapipoca, CE',
    'Canindé, CE',
    'Pacatuba, CE',
    'Aquiraz, CE',
    'Maranguape, CE',
    'Horizonte, CE',
    'Eusébio, CE',
    'Pacajus, CE',
    'Redenção, CE',
    'Baturité, CE',
    'Guaraciaba do Norte, CE',
    'Tianguá, CE',
    'Crateús, CE',
    'Fortim, CE',
    'Aracati, CE',
    'Icapuí, CE',
    'Beberibe, CE',
    'Canoa Quebrada, CE',
    'Jericoacoara, CE',
    'Camocim, CE',
    'Paracuru, CE',
    'Itarema, CE',
    'Acaraú, CE',
    'Barbalha, CE',
    'Icó, CE',
    'Limoeiro do Norte, CE',
    'Morada Nova, CE',
    'Quixeramobim, CE',
    'Boa Viagem, CE',
    'Tauá, CE',
    'Senador Pompeu, CE',
    'Mombaça, CE',
    'Solonópole, CE',
    'Milhã, CE',
    'Quixelô, CE',
    'Jucás, CE',
    'Cariús, CE',
    'Várzea Alegre, CE',
    'Cedro, CE',
    'Lavras da Mangabeira, CE',
    'Aurora, CE',
    'Missão Velha, CE',
    'Barro, CE',
    'Brejo Santo, CE',
    'Mauriti, CE',
    'Penaforte, CE',
    'Jardim, CE',
    'Altaneira, CE',
    'Nova Olinda, CE',
    'Santana do Cariri, CE',
    'Assaré, CE',
    'Potengi, CE',
    'Araripe, CE',
    'Salitre, CE',
    'Campos Sales, CE',
    'Antonina do Norte, CE',
    'Tarrafas, CE',
    'Farias Brito, CE',
    'Caririaçu, CE',
    'Granjeiro, CE',
    'Jati, CE',
    'Abaiara, CE',
    'Porteiras, CE',
  ].sort((a, b) => a.localeCompare(b, 'pt-BR'));

  // Lista de veículos (mock)
  // Adicione um campo 'location' para cada veículo
  const vehicles = [
    {
      brand: 'MITSUBISHI',
      model: 'PAJERO SPORT',
      year: '2025',
      km: '0',
      price: '426990',
      displayPrice: 'R$ 426.990',
      location: 'São Paulo, SP',
      photo: 'https://www.autocerto.com/fotos/3291/1399791/1.jpg',
    },
    {
      brand: 'RENAULT',
      model: 'OROCH',
      year: '2025',
      km: '0',
      price: '126690',
      displayPrice: 'R$ 126.690',
      location: 'Curitiba, PR',
      photo: 'https://images.usadosbr.com/manipulatedImages/media/gallery/be/12/78/renault-duster-oroch-1-6-dynamique-18-2022-belo-horizonte-mg-9eef514b-0g--0-image-760x570-crop.webp',
    },
    {
      brand: 'RENAULT',
      model: 'KARDIAN',
      year: '2025',
      km: '0',
      price: '145990',
      displayPrice: 'R$ 145.990',
      location: 'Belo Horizonte, MG',
      photo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcFNkAuEFUePsHSQtE5HEe_V5IR6CIdr7HOIqFOzA9b4iD8bxRbiGyizhgw9zAXDAbLK2xuF2R3bUzG7K3-0YLvxAFhvjqwKe6X6zuTAa9z4sk1RD-iV7dH_kAuFcPaPzagYAEQIjh1id-ViY7nh5P7pxAur8zAwqnwyc_FZcIZxybumLk2tamz9nau70b/s2560/Renault-Kardian-Premier-2025%20%287%29.JPG',
    },
    {
      brand: 'FIAT',
      model: 'FIORINO',
      year: '2023/2024',
      km: '39.329',
      price: '94900',
      displayPrice: 'R$ 94.900',
      location: 'São Paulo, SP',
      photo: 'https://www.autocerto.com/fotos/1853/1391391/15.jpg',
    },
    {
      brand: 'TOYOTA',
      model: 'COROLLA',
      year: '2022',
      km: '25.000',
      price: '115000',
      displayPrice: 'R$ 115.000',
      location: 'Porto Alegre, RS',
      photo: 'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250721/toyota-corolla-2-0-vvtie-flex-altis-direct-shift-wmimagem04412094632.webp?s=fill&w=552&h=414&q=60',
    },
    {
      brand: 'HYUNDAI',
      model: 'CRETA',
      year: '2021/2022',
      km: '76.609',
      price: '103.990',
      displayPrice: 'R$ 103.990',
      location: 'Jaú, SP',
      photo: 'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202506/20250623/hyundai-creta-1.0-tgdi-flex-limited-automatico-wmimagem11300347734.jpg?s=fill&w=552&h=414&q=60',
    },
    {
      brand: 'FORD',
      model: 'MUSTANG',
      year: '2023/2024',
      km: '25.000',
      price: '549.000',
      displayPrice: 'R$ 549.000',
      location: 'Curitiba, PR',
      photo: 'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250721/ford-mustang-5.0-v8-gasolina-gt-performance-manual-wmimagem01374175836.jpg?s=fill&w=552&h=414&q=60',
    },
     {
      brand: 'HONDA',
      model: 'FIT',
      year: '2016/2016',
      km: '95.001',
      price: '51.990',
      displayPrice: 'R$ 51.990',
      location: 'Americana, SP',
      photo: 'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202506/20250615/honda-fit-1.5-lx-16v-flex-4p-automatico-wmimagem04440034121.jpg?s=fill&w=552&h=414&q=60',
    },
     {
      brand: 'CHEVROLET',
      model: 'ONIX',
      year: '2022/2023',
      km: '54.700',
      price: '71.900',
      displayPrice: 'R$ 71.900',
      location: 'Florianópolis, SC',
      photo: 'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202506/20250603/chevrolet-onix-1.0-turbo-flex-lt-manual-wmimagem22082151826.jpg?s=fill&w=552&h=414&q=60',
    },
  ];

  // Filtro de busca, localização e ano
  let filteredVehicles = vehicles.filter(v => {
    const searchTerm = search.trim().toLowerCase();
    // Filtro por busca (marca/modelo)
    const matchesSearch = !searchTerm ||
      v.brand.toLowerCase().includes(searchTerm) ||
      v.model.toLowerCase().includes(searchTerm);

    // Filtro por localização (múltiplas cidades, ignora acentos e espaços)
    const normalize = str => (str || '').toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/\s+/g, ' ').trim();
    const matchesLocation =
      locations.length === 0 ||
      locations.some(loc => normalize(v.location) === normalize(loc));

    // Filtro por marca selecionada (se houver)
    const marcasSelecionadasLower = marcasSelecionadas.map(m => m.nome.toLowerCase());
    const matchesMarca = marcasSelecionadas.length === 0 || marcasSelecionadasLower.includes(v.brand.toLowerCase());

    // Filtro por ano
    // Considera apenas o primeiro ano se for "2023/2024"
    const getYear = y => parseInt((y || '').split('/')[0]);
    const year = getYear(v.year);
    let matchesAno = true;
    if (anoSelecionado) {
      matchesAno = year === anoSelecionado;
    } else {
      if (anoMin && year < parseInt(anoMin)) matchesAno = false;
      if (anoMax && year > parseInt(anoMax)) matchesAno = false;
    }

    // Filtro por preço mínimo e máximo
    const price = parseInt((v.price || '').toString().replace(/\D/g, ''));
    let matchesPreco = true;
    if (precoMin) {
      const min = parseInt(precoMin.replace(/\D/g, ''));
      if (!isNaN(min) && price < min) matchesPreco = false;
    }
    if (precoMax) {
      const max = parseInt(precoMax.replace(/\D/g, ''));
      if (!isNaN(max) && price > max) matchesPreco = false;
    }

    return matchesSearch && matchesLocation && matchesMarca && matchesAno && matchesPreco;
  });

  // Ordenação dos veículos conforme selecionado
  filteredVehicles = [...filteredVehicles];
  switch (orderBy) {
    case 'Maior preço':
      filteredVehicles.sort((a, b) => {
        // Suporta preço com ponto ou string
        const priceA = parseInt((a.price || '').toString().replace(/\D/g, ''));
        const priceB = parseInt((b.price || '').toString().replace(/\D/g, ''));
        return priceB - priceA;
      });
      break;
    case 'Menor preço':
      filteredVehicles.sort((a, b) => {
        const priceA = parseInt((a.price || '').toString().replace(/\D/g, ''));
        const priceB = parseInt((b.price || '').toString().replace(/\D/g, ''));
        return priceA - priceB;
      });
      break;
    case 'Ano mais novo':
      filteredVehicles.sort((a, b) => {
        const getYear = y => parseInt((y || '').split('/')[0]);
        return getYear(b.year) - getYear(a.year);
      });
      break;
    case 'Menor Km':
      filteredVehicles.sort((a, b) => {
        const getKm = km => parseInt((km || '').toString().replace(/\D/g, ''));
        return getKm(a.km) - getKm(b.km);
      });
      break;
    // 'Mais relevantes' mantém a ordem original
    default:
      break;
  }
  return (
    <>
      <AppBar position="fixed" elevation={0} sx={{ bgcolor: '#fff', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
        <Toolbar sx={{ px: 0, display: 'flex', alignItems: 'center', minHeight: 64 }}>
          <Typography variant="h6" sx={{ pl: 5 }}>
            <img
              src="/logogirofipe.png"
              alt="GiroFipe"
              style={{ height: '22px' }}
            />
          </Typography>
          <Box sx={{ position: 'absolute', left: '50%', top: 0, height: '100%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
            <MenuButton text="Início" active={false} />
            <FadeMenu />
            <MenuButton text="Contato" active={false} />
            {/* Campo de busca */}
            <Box sx={{ ml: 3, width: 320, position: 'relative', display: { xs: 'none', sm: 'block' } }}>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Busque por marca ou modelo"
                style={{
                  width: '100%',
                  padding: '12px 40px 12px 16px',
                  borderRadius: 8,
                  border: '1.5px solid #bdbcc7',
                  fontSize: 16,
                  color: '#222',
                  background: '#fff',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border 0.2s',
                }}
              />
              <span style={{
                position: 'absolute',
                right: 14,
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#6a6977',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
              }}>
                <svg width="22" height="22" fill="none" stroke="#6a6977" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </span>
            </Box>
          </Box>
          <Box sx={{ position: 'absolute', right: 32, top: 0, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <MenuButton text={<><PersonAddIcon sx={{ mr: 0.5, fontSize: 20 }} />Cadastre-se</>} active={false} />
            <MenuButton text={<><LoginIcon sx={{ mr: 0.5, fontSize: 20 }} />Entrar</>} active={false} />
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth={false} sx={{ mt: 14, display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ display: 'flex', gap: 4, maxWidth: 1200, width: '100%' }}>
          {/* Filtros à esquerda - formato lista expansiva */}
          <Box sx={{ width: 300, bgcolor: '#fff', borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6" sx={{ color: '#1D89FF', fontWeight: 600, fontSize: 20 }}>Filtros</Typography>
              <span
                style={{ color: '#1D89FF', textDecoration: 'underline', cursor: 'pointer', fontWeight: 500, fontSize: 14 }}
                onClick={handleClearAll}
              >
                Limpar todos
              </span>
            </Box>
            {/* Lista de filtros expansivos */}
            {[
            { label: 'Localização', content: (
              <Box sx={{ p: 0, mb: 2, minHeight: 48 }}>
                <Autocomplete
                  freeSolo
                  options={cityOptions.filter(opt => !locations.includes(opt))}
                  value={null}
                  inputValue={locationInput}
                  onInputChange={(_, newInputValue) => setLocationInput(newInputValue)}
                  onChange={(_, newValue) => {
                    if (newValue && !locations.includes(newValue)) {
                      setLocations([...locations, newValue]);
                      setLocationInput("");
                    }
                  }}
                  renderInput={(params) => (
                    <div ref={params.InputProps.ref}>
                      <input
                        {...params.inputProps}
                        type="text"
                        placeholder="Digite sua cidade ou estado"
                        value={locationInput}
                        onChange={e => setLocationInput(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px 36px 10px 12px',
                          borderRadius: 8,
                          border: '1.5px solid #bdbcc7',
                          fontSize: 15,
                          color: '#222',
                          background: '#fff',
                          outline: 'none',
                          boxSizing: 'border-box',
                          transition: 'border 0.2s',
                        }}
                      />
                    </div>
                  )}
                  renderOption={(props, option) => (
                    <li {...props} style={{ fontWeight: 700 }}>{option}</li>
                  )}
                  noOptionsText={'Nenhuma cidade encontrada'}
                />
                <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {locations.map((loc, idx) => (
                    <Box key={loc} sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      border: '1px solid #e0e0e0',
                      borderRadius: 999,
                      px: 1.2,
                      py: 0.1,
                      bgcolor: '#fff',
                      fontWeight: 500,
                      fontSize: 13,
                      color: '#222',
                      boxShadow: 'none',
                      gap: 0.5,
                      minHeight: 26,
                      height: 26,
                      lineHeight: 1,
                    }}>
                      <span style={{ fontWeight: 600, fontSize: 13 }}>{loc}</span>
                      <span
                        style={{
                          marginLeft: 4,
                          cursor: 'pointer',
                          color: '#222',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        onClick={() => setLocations(locations.filter(l => l !== loc))}
                      >
                        <CloseIcon sx={{ fontSize: 15 }} />
                      </span>
                    </Box>
                  ))}
                </Box>
              </Box>
            ) },
            { label: 'Preço', content: (
              <Box sx={{ p: 0, mb: 2 }}>
                <Typography variant="subtitle2" sx={{ mb: 1, color: '#6a6977', fontWeight: 500, fontSize: 14 }}>Escolha um intervalo</Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  {/* Preço mínimo */}
                  <Box sx={{ width: '100%', maxWidth: '150px' }}>
                    <input
                      type="text"
                      inputMode="numeric"
                      min="0"
                      placeholder="Mínimo"
                      value={formatReal(precoMin)}
                      onChange={handlePrecoChange(setPrecoMin)}
                      style={{
                        width: '100%',
                        maxWidth: '150px',
                        padding: '10px',
                        borderRadius: 5,
                        border: '1px solid #e0e0e0',
                        fontSize: 15,
                        marginBottom: 0,
                        boxSizing: 'border-box',
                      }}
                    />
                  </Box>
                  {/* Preço máximo */}
                  <Box sx={{ width: '100%', maxWidth: '150px' }}>
                    <input
                      type="text"
                      inputMode="numeric"
                      min="0"
                      placeholder="Máximo"
                      value={formatReal(precoMax)}
                      onChange={handlePrecoChange(setPrecoMax)}
                      style={{
                        width: '100%',
                        maxWidth: '150px',
                        padding: '10px',
                        borderRadius: 5,
                        border: '1px solid #e0e0e0',
                        fontSize: 15,
                        marginBottom: 0,
                        boxSizing: 'border-box',
                      }}
                    />
                  </Box>
                </Box>
                <Typography variant="subtitle2" sx={{ mb: 1, color: '#6a6977', fontWeight: 500, fontSize: 14 }}>Ou escolha uma faixa de preço específica</Typography>
                {/* Faixas de preço funcionais */}
                <Box sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 1,
                  mb: 1,
                }}>
                  {[
                    { label: 'Até 60 mil', value: 60000 },
                    { label: 'Até 70 mil', value: 70000 },
                    { label: 'Até 80 mil', value: 80000 },
                    { label: 'Até 100 mil', value: 100000 },
                    { label: 'Até 150 mil', value: 150000 },
                    { label: 'Até 200 mil', value: 200000 },
                  ].map(({ label, value }) => (
                    <Button
                      key={label}
                      variant={precoMax && parseInt(precoMax) === value && !precoMin ? 'contained' : 'outlined'}
                      sx={{
                        bgcolor: precoMax && parseInt(precoMax) === value && !precoMin ? '#1D89FF' : '#f5f5f5',
                        color: precoMax && parseInt(precoMax) === value && !precoMin ? '#fff' : '#888',
                        borderColor: '#e0e0e0',
                        borderRadius: 5,
                        fontWeight: 500,
                        fontSize: 12,
                        px: 0.5,
                        py: 0.5,
                        minWidth: 0,
                        boxShadow: 'none',
                        textAlign: 'center',
                        display: 'inline-flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        lineHeight: 1.1,
                        textTransform: 'none',
                      }}
                      onClick={() => {
                        setPrecoMin('');
                        setPrecoMax(value.toString());
                      }}
                    >
                      {label}
                    </Button>
                  ))}
                </Box>
              </Box>
            ) },
            { label: 'Categoria', content: <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', p: 0, mb: 2 }}><Button variant="contained" sx={{ bgcolor: '#1D89FF', color: '#fff', fontWeight: 500, textTransform: 'none', boxShadow: 'none', borderRadius: 2 }}>Carros</Button><Button variant="outlined" sx={{ color: '#1D89FF', borderColor: '#1D89FF', textTransform: 'none', borderRadius: 2 }}>Motos</Button><Button variant="outlined" sx={{ color: '#1D89FF', borderColor: '#1D89FF', textTransform: 'none', borderRadius: 2 }}>Caminhonetes</Button><Button variant="outlined" sx={{ color: '#1D89FF', borderColor: '#1D89FF', textTransform: 'none', borderRadius: 2 }}>Utilitários</Button><Button variant="outlined" sx={{ color: '#1D89FF', borderColor: '#1D89FF', textTransform: 'none', borderRadius: 2 }}>Caminhões</Button><Button variant="outlined" sx={{ color: '#1D89FF', borderColor: '#1D89FF', textTransform: 'none', borderRadius: 2 }}>Máquinas</Button></Box> },
            { label: 'Marca', content: (
              <Box sx={{ p: 0, mb: 2 }}>
                {/* Cards das marcas selecionadas */}
                {marcasSelecionadas.map((marca, idx) => (
                  <Box key={marca.nome} sx={{
                    border: '1px solid #eee',
                    borderRadius: 2,
                    px: 2,
                    py: 2,
                    mb: 2,
                    bgcolor: '#fff',
                    boxShadow: 'none',
                    minHeight: 80,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    gap: 2,
                  }}>
                    {/* Logo à esquerda */}
                    <img src={marca.logo} alt={marca.nome} style={{ height: 48, width: 48, objectFit: 'contain', display: 'block', marginTop: 2 }} />
                    {/* Infos em coluna */}
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                      {/* Marca */}
                      <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee', minHeight: 32 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: 20, color: '#222', flex: 1 }}>{marca.nome}</Typography>
                        <span style={{ cursor: 'pointer', color: '#888', fontSize: 20, lineHeight: 1 }} title="Remover marca" onClick={() => handleRemoverMarca(marca.nome)}>
                          ×
                        </span>
                      </Box>
                      {/* Modelo row */}
                      <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee', minHeight: 32 }}>
                        <Select
                          value={marca.modeloSelecionado || ''}
                          displayEmpty
                          onChange={e => {
                            setMarcasSelecionadas(marcasSelecionadas.map((m, i) =>
                              i === idx ? { ...m, modeloSelecionado: e.target.value, versaoSelecionada: '' } : m
                            ));
                          }}
                          sx={{
                            flex: 1,
                            fontWeight: 500,
                            fontSize: 16,
                            color: marca.modeloSelecionado ? '#222' : '#888',
                            background: 'none',
                            boxShadow: 'none',
                            '.MuiSelect-icon': { color: '#bbb', fontSize: 22 },
                            '.MuiOutlinedInput-notchedOutline': { border: 'none' },
                            px: 0,
                            '&:hover': { background: '#f6f6fa' },
                          }}
                          inputProps={{ 'aria-label': 'Selecionar modelo' }}
                          variant="outlined"
                          IconComponent={KeyboardArrowDownIcon}
                          MenuProps={{
                            PaperProps: { sx: { mt: 1, borderRadius: 2, minWidth: 180 } }
                          }}
                        >
                          <MenuItem value="" sx={{ color: '#888' }}>Todos os modelos</MenuItem>
                          {(modelosPorMarca[marca.nome] || []).map(modelo => (
                            <MenuItem key={modelo} value={modelo}>{modelo}</MenuItem>
                          ))}
                        </Select>
                        {marca.modeloSelecionado && (
                          <span style={{ cursor: 'pointer', color: '#888', fontSize: 18, marginLeft: 8 }} title="Remover modelo" onClick={e => { e.stopPropagation(); setMarcasSelecionadas(marcasSelecionadas.map((m, i) => i === idx ? { ...m, modeloSelecionado: '', versaoSelecionada: '' } : m)); }}>
                            ×
                          </span>
                        )}
                      </Box>
                      {/* Versão row */}
                      <Box sx={{ display: 'flex', alignItems: 'center', minHeight: 32 }}>
                        <Select
                          value={marca.versaoSelecionada || ''}
                          displayEmpty
                          onChange={e => {
                            setMarcasSelecionadas(marcasSelecionadas.map((m, i) =>
                              i === idx ? { ...m, versaoSelecionada: e.target.value } : m
                            ));
                          }}
                          sx={{
                            flex: 1,
                            fontWeight: 500,
                            fontSize: 15,
                            color: marca.modeloSelecionado ? (marca.versaoSelecionada ? '#222' : '#bbb') : '#bbb',
                            background: 'none',
                            boxShadow: 'none',
                            '.MuiSelect-icon': { color: '#bbb', fontSize: 22 },
                            '.MuiOutlinedInput-notchedOutline': { border: 'none' },
                            px: 0,
                            opacity: marca.modeloSelecionado ? 1 : 0.7,
                            pointerEvents: marca.modeloSelecionado ? 'auto' : 'none',
                            '&:hover': marca.modeloSelecionado ? { background: '#f6f6fa' } : {},
                          }}
                          inputProps={{ 'aria-label': 'Selecionar versão' }}
                          variant="outlined"
                          IconComponent={KeyboardArrowDownIcon}
                          MenuProps={{
                            PaperProps: { sx: { mt: 1, borderRadius: 2, minWidth: 180 } }
                          }}
                        >
                          <MenuItem value="" sx={{ color: '#bbb' }}>Todas as versões</MenuItem>
                          {(versoesPorModelo[marca.modeloSelecionado] || []).map(versao => (
                            <MenuItem key={versao} value={versao}>{versao}</MenuItem>
                          ))}
                        </Select>
                        {marca.modeloSelecionado && marca.versaoSelecionada && (
                          <span style={{ cursor: 'pointer', color: '#888', fontSize: 18, marginLeft: 8 }} title="Remover versão" onClick={e => { e.stopPropagation(); setMarcasSelecionadas(marcasSelecionadas.map((m, i) => i === idx ? { ...m, versaoSelecionada: '' } : m)); }}>
                            ×
                          </span>
                        )}
                      </Box>
                    </Box>
                  </Box>
                ))}
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  {showAllBrands ? (
                    <Box sx={{ width: 320, mx: 'auto', bgcolor: '#fff', borderRadius: 3, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', p: 0, minHeight: 500, maxHeight: 600, display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', px: 2, pt: 2, pb: 1 }}>
                        <Button onClick={() => setShowAllBrands(false)} sx={{ minWidth: 0, p: 0.5, mr: 1, color: '#222', borderRadius: 2, '&:hover': { bgcolor: '#f5f5f5' } }}>
                          <ArrowBackIcon sx={{ fontSize: 26 }} />
                        </Button>
                        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: 18, flex: 1, textAlign: 'left' }}>Selecione uma marca</Typography>
                      </Box>
                      <Box sx={{ px: 2, pb: 2 }}>
                        <input
                          type="text"
                          value={brandSearch}
                          onChange={e => setBrandSearch(e.target.value)}
                          placeholder="Digite a marca desejada"
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: 8,
                            border: '1.5px solid #bdbcc7',
                            fontSize: 15,
                            color: '#222',
                            background: '#fff',
                            outline: 'none',
                            boxSizing: 'border-box',
                            marginBottom: 8,
                          }}
                        />
                      </Box>
                      <Box sx={{ px: 2, pb: 2, flex: 1, overflowY: 'auto' }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: 15, mb: 1, color: '#222' }}>Todas as marcas</Typography>
                        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                          {marcasDisponiveis
                            .filter(m => m.nome.toLowerCase().includes(brandSearch.toLowerCase()))
                            .sort((a, b) => a.nome.localeCompare(b.nome))
                            .map(marca => (
                              <li key={marca.nome}>
                                <Button
                                  variant="text"
                                  sx={{
                                    width: '100%',
                                    justifyContent: 'flex-start',
                                    color: '#222',
                                    fontWeight: 500,
                                    fontSize: 15,
                                    borderRadius: 2,
                                    textTransform: 'none',
                                    px: 1,
                                    py: 1,
                                    mb: 0.5,
                                    '&:hover': { bgcolor: '#f5f5f5', color: '#1D89FF' },
                                  }}
                                  onClick={() => {
                                    handleAdicionarMarca(marca);
                                    setShowAllBrands(false);
                                    setBrandSearch("");
                                  }}
                                >
                                  {marca.nome}
                                </Button>
                              </li>
                            ))}
                        </Box>
                      </Box>
                    </Box>
                  ) : marcasSelecionadas.length === 0 ? (
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 242, mx: 'auto' }}>
                      <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 88px)',
                        gap: '8px',
                        mb: 1.5,
                        width: 242,
                        height: 272,
                        maxWidth: 242,
                        minWidth: 242,
                        minHeight: 272,
                        maxHeight: 272,
                        px: 0,
                        alignContent: 'start',
                        justifyContent: 'center',
                        boxSizing: 'border-box',
                        background: 'transparent',
                      }}>
                        {marcasDisponiveis.slice(0, 9).map(marca => (
                          <Box key={marca.nome} sx={{
                            border: '1px solid #e0e0e0',
                            borderRadius: 2,
                            p: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'box-shadow 0.2s, border 0.2s',
                            boxShadow: 'none',
                            width: 70,
                            height: 70,
                            mx: 'auto',
                            '&:hover': {
                              boxShadow: '0 2px 8px rgba(29,137,255,0.10)',
                              border: '1.5px solid #1D89FF',
                            },
                          }}
                          onClick={() => handleAdicionarMarca(marca)}
                          >
                            <img src={marca.logo} alt={marca.nome} style={{ height: 48, width: 48, objectFit: 'contain', aspectRatio: '1 / 1', marginBottom: 6 }} />
                            <span style={{ fontWeight: 500, fontSize: 10, color: '#222', textAlign: 'center', wordBreak: 'break-word', lineHeight: 1.1 }}>{marca.nome}</span>
                          </Box>
                        ))}
                      </Box>
                      <Box sx={{ width: 242, display: 'flex', justifyContent: 'flex-start', pr: 0, mb: 1 }}>
                        <Button
                          variant="text"
                          sx={{
                            color: '#222',
                            fontWeight: 500,
                            fontSize: 14,
                            textTransform: 'none',
                            minWidth: 0,
                            px: 0,
                            py: 1,
                            borderRadius: 2,
                            gap: 0.5,
                            display: 'flex',
                            alignItems: 'center',
                            '&:hover': { bgcolor: 'transparent', color: '#1D89FF' },
                          }}
                          onClick={() => setShowAllBrands(true)}
                        >
                          <span style={{ display: 'flex', alignItems: 'center' }}>Ver todas as marcas <KeyboardArrowRightIcon sx={{ fontSize: '16px', fontWeight: 700, ml: 0 }} /></span>
                        </Button>
                      </Box>
                    </Box>
                  ) : (
                    <>
                      {/* ...existing code for selected brands... */}
                      {marcasSelecionadas.length > 0 && marcasSelecionadas.every(m => m.modeloSelecionado && m.versaoSelecionada) && (
                        <Button variant="text" sx={{ color: '#222', fontWeight: 500, fontSize: 15, textTransform: 'none', gap: 1, mt: 2 }} onClick={() => setAdicionandoMarca(true)}>
                          Adicionar mais um veículo <span style={{ fontSize: 22, fontWeight: 700, marginLeft: 4 }}>+</span>
                        </Button>
                      )}
                      {adicionandoMarca && (
                        <Box>
                          <Box sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)' },
                            gap: 2,
                            mb: 2,
                            justifyContent: 'center',
                            maxWidth: 360,
                            margin: '0 auto',
                          }}>
                            {marcasDisponiveis.filter(m => !marcasSelecionadas.some(sel => sel.nome === m.nome)).map(marca => (
                              <Box key={marca.nome} sx={{
                                border: '1px solid #e0e0e0',
                                borderRadius: 2,
                                p: 1.5,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                cursor: 'pointer',
                                transition: 'box-shadow 0.2s, border 0.2s',
                                boxShadow: 'none',
                                '&:hover': {
                                  boxShadow: '0 2px 8px rgba(29,137,255,0.10)',
                                  border: '1.5px solid #1D89FF',
                                },
                              }}
                              onClick={() => handleAdicionarMarca(marca)}
                              >
                                <img src={marca.logo} alt={marca.nome} style={{ height: 40, width: 40, objectFit: 'contain', marginBottom: 8 }} />
                                <span style={{ fontWeight: 500, fontSize: 15, color: '#222', textAlign: 'center', wordBreak: 'break-word' }}>{marca.nome}</span>
                              </Box>
                            ))}
                          </Box>
                          <Button variant="text" size="small" sx={{ color: '#888', fontSize: 15, textTransform: 'none' }} onClick={() => setAdicionandoMarca(false)}>
                            Cancelar
                          </Button>
                        </Box>
                      )}
                    </>
                  )}
                </Box>
              </Box>
            ) },
            { label: 'Ano', content: (
              <Box sx={{ p: 0, mb: 2 }}>
                <Typography variant="subtitle2" sx={{ mb: 1, color: '#6a6977', fontWeight: 500, fontSize: 14 }}>Escolha um intervalo</Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <Box sx={{ width: '100%', position: 'relative', display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                    <div style={{ position: 'relative' }}>
                      <input
                        type="text"
                        maxLength={4}
                        placeholder="Ano mínimo"
                        value={anoMin}
                        onChange={e => {
                          let val = e.target.value.replace(/\D/g, '').slice(0, 4);
                          setAnoMin(val);
                          setAnoSelecionado(null);
                          setAnoMinError(validateAno(val));
                        }}
                        style={{
                          width: '100%',
                          padding: '10px 32px 10px 10px',
                          borderRadius: 5,
                          border: anoMinError ? '2px solid #F44336' : '1px solid #bdbcc7',
                          fontSize: 15,
                          marginBottom: 0,
                          boxSizing: 'border-box',
                          color: anoMinError ? '#F44336' : undefined,
                          transition: 'border 0.2s',
                        }}
                      />
                      {anoMinError && (
                        <span style={{
                          position: 'absolute',
                          right: 8,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          color: '#F44336',
                          display: 'flex',
                          alignItems: 'center',
                          background: '#fff',
                          padding: 0,
                          margin: 0,
                        }}>
                          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9Z" stroke="#F44336" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 16h.01" stroke="#F44336" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </span>
                      )}
                    </div>
                    {anoMinError && (
                      <Typography variant="caption" sx={{ color: '#F44336', fontWeight: 500, mt: 0.2, ml: 0, lineHeight: 1.2 }}>
                        Ano inválido
                      </Typography>
                    )}
                  </Box>
                  <Box sx={{ width: '100%', position: 'relative', display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                    <div style={{ position: 'relative' }}>
                      <input
                        type="text"
                        maxLength={4}
                        placeholder="Ano máximo"
                        value={anoMax}
                        onChange={e => {
                          let val = e.target.value.replace(/\D/g, '').slice(0, 4);
                          setAnoMax(val);
                          setAnoSelecionado(null);
                          setAnoMaxError(validateAno(val));
                        }}
                        style={{
                          width: '100%',
                          padding: '10px 32px 10px 10px',
                          borderRadius: 5,
                          border: anoMaxError ? '2px solid #F44336' : '1px solid #bdbcc7',
                          fontSize: 15,
                          marginBottom: 0,
                          boxSizing: 'border-box',
                          color: anoMaxError ? '#F44336' : undefined,
                          transition: 'border 0.2s',
                        }}
                      />
                      {anoMaxError && (
                        <span style={{
                          position: 'absolute',
                          right: 8,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          color: '#F44336',
                          display: 'flex',
                          alignItems: 'center',
                          background: '#fff',
                          padding: 0,
                          margin: 0,
                        }}>
                          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9Z" stroke="#F44336" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 16h.01" stroke="#F44336" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </span>
                      )}
                    </div>
                    {anoMaxError && (
                      <Typography variant="caption" sx={{ color: '#F44336', fontWeight: 500, mt: 0.2, ml: 0, lineHeight: 1.2 }}>
                        Ano inválido
                      </Typography>
                    )}
                  </Box>
                </Box>
                {/* Mensagem de erro abaixo de cada campo */}
                {/* Mensagem de erro agora aparece logo abaixo de cada campo, ao lado do campo, se houver erro */}
                <Typography variant="subtitle2" sx={{ mb: 1, color: '#6a6977', fontWeight: 500, fontSize: 14 }}>Ou escolha um ano específico</Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 1 }}>
                  {[2025,2024,2023,2022,2021,2020,2019,2018,2017,2016].map(ano => (
                    <Button
                      key={ano}
                      variant={anoSelecionado === ano ? 'contained' : 'outlined'}
                      sx={{
                        bgcolor: anoSelecionado === ano ? '#1D89FF' : '#f5f5f5',
                        color: anoSelecionado === ano ? '#fff' : '#888',
                        borderColor: '#e0e0e0',
                        borderRadius: 5,
                        fontWeight: 500,
                        fontSize: 13,
                        px: 0.5,
                        py: 0.5,
                        minWidth: 0,
                        boxShadow: 'none',
                        textAlign: 'center',
                        display: 'inline-flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        lineHeight: 1.1,
                        textTransform: 'none',
                        '&:hover': {
                          bgcolor: anoSelecionado === ano ? '#1D89FF' : '#ececec',
                        },
                      }}
                      onClick={() => {
                        setAnoSelecionado(ano);
                        setAnoMin("");
                        setAnoMax("");
                      }}
                    >
                      {ano}
                    </Button>
                  ))}
                </Box>
              </Box>
            ) }, 
            { label: 'Quilometragem', content: <Box sx={{ display: 'flex', gap: 1, p: 0, mb: 2 }}><input type="number" min="0" placeholder="Mínima" style={{ width: '45%', padding: '10px', borderRadius: 6, border: '1px solid #e0e0e0', marginBottom: 0 }} /><span style={{ alignSelf: 'center', color: '#888' }}>-</span><input type="number" min="0" placeholder="Máxima" style={{ width: '45%', padding: '10px', borderRadius: 6, border: '1px solid #e0e0e0', marginBottom: 0 }} /></Box> },
            { label: 'Itens do veículo', content: <Box sx={{ p: 0, mb: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}><label style={{ marginBottom: 0 }}><input type="checkbox" style={{ marginRight: 8 }} /> Airbag</label><label style={{ marginBottom: 0 }}><input type="checkbox" style={{ marginRight: 8 }} /> ABS</label><label style={{ marginBottom: 0 }}><input type="checkbox" style={{ marginRight: 8 }} /> Ar-condicionado</label></Box> },
            { label: 'Câmbio', content: <Box sx={{ p: 0, mb: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}><label style={{ marginBottom: 0 }}><input type="checkbox" style={{ marginRight: 8 }} /> Manual</label><label style={{ marginBottom: 0 }}><input type="checkbox" style={{ marginRight: 8 }} /> Automático</label></Box> },
            { label: 'Cor', content: <Box sx={{ p: 0, mb: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}><label style={{ marginBottom: 0 }}><input type="checkbox" style={{ marginRight: 8 }} /> Preto</label><label style={{ marginBottom: 0 }}><input type="checkbox" style={{ marginRight: 8 }} /> Branco</label><label style={{ marginBottom: 0 }}><input type="checkbox" style={{ marginRight: 8 }} /> Prata</label></Box> },
            { label: 'Combustível', content: <Box sx={{ p: 0, mb: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}><label style={{ marginBottom: 0 }}><input type="checkbox" style={{ marginRight: 8 }} /> Gasolina</label><label style={{ marginBottom: 0 }}><input type="checkbox" style={{ marginRight: 8 }} /> Diesel</label><label style={{ marginBottom: 0 }}><input type="checkbox" style={{ marginRight: 8 }} /> Flex</label></Box> },
            { label: 'Final da placa', content: <Box sx={{ p: 0, mb: 2 }}><input type="number" min="0" max="9" placeholder="0-9" style={{ width: '100%', padding: '10px', borderRadius: 6, border: '1px solid #e0e0e0', marginBottom: 0 }} /></Box> },
            { label: 'Blindagem', content: <Box sx={{ p: 0, mb: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}><label style={{ marginBottom: 0 }}><input type="checkbox" style={{ marginRight: 8 }} /> Sim</label><label style={{ marginBottom: 0 }}><input type="checkbox" style={{ marginRight: 8 }} /> Não</label></Box> },
            { label: 'Carroceria', content: <Box sx={{ p: 0, mb: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}><label style={{ marginBottom: 0 }}><input type="checkbox" style={{ marginRight: 8 }} /> Sedan</label><label style={{ marginBottom: 0 }}><input type="checkbox" style={{ marginRight: 8 }} /> Hatch</label><label style={{ marginBottom: 0 }}><input type="checkbox" style={{ marginRight: 8 }} /> SUV</label></Box> },
              
            ].map((filter, idx) => {
              const isAlwaysOpen = filter.label === 'Localização' || filter.label === 'Categoria' || filter.label === 'Preço';
              return (
                <Box key={filter.label} sx={{ borderBottom: '1px solid #eee', mb: 0.5 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 500, cursor: isAlwaysOpen ? 'default' : 'pointer', userSelect: 'none', display: 'flex', alignItems: 'center', py: 1 }}
                    onClick={isAlwaysOpen ? undefined : () => {
                      const el = document.getElementById(`filter-content-${idx}`);
                      el.style.display = el.style.display === 'none' ? 'block' : 'none';
                    }}
                  >
                    {filter.label}
                  {isAlwaysOpen ? null : (
                    <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                      <KeyboardArrowDownIcon sx={{ color: '#1D89FF', fontSize: 28 }} />
                    </span>
                  )}
                  </Typography>
                  <Box id={`filter-content-${idx}`} sx={{ display: isAlwaysOpen ? 'block' : 'none' }}>{filter.content}</Box>
                </Box>
              );
            })}
          </Box>
          {/* Cards de veículos */}
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, color: '#000000ff' }}>Veículos usados e seminovos</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <SyncAltIcon sx={{ fontSize: 16, color: '#222', transform: 'rotate(90deg)' }} />
                <Typography variant="body2" sx={{ color: '#6a6977', fontWeight: 500, fontSize: 15 }}>
                  <span style={{ color: '#000000ff', textDecoration: 'none', fontWeight: 500 }}>Ordenar Por:</span>
                </Typography>
                <Button
                  disableElevation
                  onClick={handleOrderClick}
                  sx={{
                    fontWeight: 700,
                    color: '#222',
                    bgcolor: '#ecedf2',
                    border: 'none',
                    borderRadius: 2,
                    fontSize: 14,
                    px: 2,
                    py: 0.5,
                    minWidth: 170,
                    maxWidth: 100,
                    width: 160,
                    ml: 1,
                    boxShadow: 'none',
                    textTransform: 'none',
                    '&:hover': { bgcolor: '#ececec', border: 'none' },
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    justifyContent: 'flex-start',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 700 }}>{orderBy}</span>
                    <KeyboardArrowDownIcon sx={{ fontSize: 22, color: '#222', ml: 1 }} />
                  </Box>
                </Button>
                <Menu
                  anchorEl={orderAnchorEl}
                  open={Boolean(orderAnchorEl)}
                  onClose={handleOrderClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  PaperProps={{
                    sx: {
                      mt: 1,
                      boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
                      borderRadius: 2,
                      minWidth: 220,
                      p: 0,
                    }
                  }}
                >
                  {orderOptions.map(option => (
                    <MenuItem
                      key={option}
                      selected={option === orderBy}
                      onClick={() => handleOrderSelect(option)}
                      sx={{ fontSize: 15, color: '#222', py: 2, px: 2, '&:hover': { bgcolor: '#f5f5f5' } }}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1.5 }}>
              {filteredVehicles.length === 0 ? (
                <Typography variant="body1" sx={{ gridColumn: '1/-1', textAlign: 'center', color: '#888', mt: 4 }}>
                  Nenhum veículo encontrado.
                </Typography>
              ) : (
                filteredVehicles.map((v, idx) => (
                  <Box key={v.brand + v.model + idx} sx={{ bgcolor: '#fff', borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Box sx={{ height: 140, bgcolor: '#e0e0e0', borderRadius: 2, mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                      {v.photo ? (
                        <img
                          src={v.photo}
                          alt={v.brand + ' ' + v.model}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                        />
                      ) : (
                        <DirectionsCarIcon sx={{ fontSize: 60, color: '#1D89FF' }} />
                      )}
                    </Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{v.brand} {v.model}</Typography>
                    {v.versao && (
                      <Typography variant="body2" sx={{ color: 'rgb(105, 105, 119)', fontWeight: 500, fontSize: 14, mb: 0.5, mt: '-4px' }}>{v.versao}</Typography>
                    )}
                    <Typography variant="body2" sx={{ color: '#666', display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CalendarTodayIcon sx={{ fontSize: 16, color: '#888', mr: 0.5 }} />
                      {v.year}
                      <SpeedIcon sx={{ fontSize: 16, color: '#888', mr: 0.5, ml: 1 }} />
                      {v.km} Km
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#888', fontSize: 14 }}>{v.location}</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#1D89FF' }}>{v.displayPrice}</Typography>
                    <Button variant="contained" sx={{ bgcolor: '#1D89FF', color: '#fff', textTransform: 'none', mt: 1 }}>Ver oferta</Button>
                  </Box>
                ))
              )}
            </Box>
          </Box>
        </Box>
      </Container>

      <Box component="footer" sx={{ mt: 10, py: 3, textAlign: 'center', bgcolor: '#f5f5f5' }}>
        <Typography variant="body2">© 2025 - Todos os direitos reservados</Typography>
      </Box>
    </>
  );
}

export default App;

// Novo componente para botão do menu principal
function MenuButton({ text, active }) {
  return (
    <Button
      sx={{
        color: active ? 'black' : '#1D89FF',
        mx: 0.1,
        textTransform: 'none',
        minWidth: 50,
        fontWeight: 500,
        fontSize: 16,
        background: 'none',
        borderBottom: active ? '2px solid #1D89FF' : '2px solid transparent',
        borderRadius: 0,
        transition: 'color 0.2s, border-bottom 0.2s',
        '&:hover': {
          color: 'black',
          borderBottom: '2px solid #1D89FF',
          background: 'none',
        },
      }}
    >
      {text}
    </Button>
  );
}
function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [hovering, setHovering] = React.useState(false);
  const open = Boolean(anchorEl);
  let closeTimeout = null;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMouseEnter = (event) => {
    setHovering(true);
    setAnchorEl(event.currentTarget);
    if (closeTimeout) clearTimeout(closeTimeout);
  };
  const handleMouseLeave = () => {
    setHovering(false);
    closeTimeout = setTimeout(() => {
      if (!hovering) setAnchorEl(null);
    }, 150);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{ display: 'inline-block' }}>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          color: open ? 'black' : '#1D89FF',
          mx: 2,
          textTransform: 'none',
          minWidth: 120,
          fontWeight: 500,
          fontSize: 16,
          background: 'none',
          borderBottom: open ? '2px solid #1D89FF' : '2px solid transparent',
          borderRadius: 0,
          transition: 'color 0.2s, border-bottom 0.2s',
          '&:hover': {
            color: 'black',
            borderBottom: '2px solid #1D89FF',
            background: 'none',
          },
        }}
      >
        Comprar
      </Button>
      <Menu
        id="fade-menu"
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
              borderRadius: 2,
              minWidth: 220,
              p: 0,
            }
          },
          list: {
            'aria-labelledby': 'fade-button',
            style: { padding: 0 },
            onMouseEnter: () => setHovering(true),
            onMouseLeave: handleMouseLeave,
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MenuItem onClick={handleClose} sx={{ fontSize: 15, color: '#222', py: 2, px: 2, gap: 2, '&:hover': { bgcolor: '#f5f5f5' } }}>
          <ListItemIcon sx={{ color: '#222', minWidth: 36 }}><TwoWheelerIcon fontSize="small" /></ListItemIcon>
          Moto
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: 15, color: '#222', py: 2, px: 2, gap: 2, '&:hover': { bgcolor: '#f5f5f5' } }}>
          <ListItemIcon sx={{ color: '#222', minWidth: 36 }}><DirectionsCarIcon fontSize="small" /></ListItemIcon>
          Carro
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: 15, color: '#222', py: 2, px: 2, gap: 2, '&:hover': { bgcolor: '#f5f5f5' } }}>
          <ListItemIcon sx={{ color: '#222', minWidth: 36 }}><AirportShuttleIcon fontSize="small" /></ListItemIcon>
          Caminhonete
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: 15, color: '#222', py: 2, px: 2, gap: 2, '&:hover': { bgcolor: '#f5f5f5' } }}>
          <ListItemIcon sx={{ color: '#222', minWidth: 36 }}><ConstructionIcon fontSize="small" /></ListItemIcon>
          Utilitário
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: 15, color: '#222', py: 2, px: 2, gap: 2, '&:hover': { bgcolor: '#f5f5f5' } }}>
          <ListItemIcon sx={{ color: '#222', minWidth: 36 }}><LocalShippingIcon fontSize="small" /></ListItemIcon>
          Caminhão
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: 15, color: '#222', py: 2, px: 2, gap: 2, '&:hover': { bgcolor: '#f5f5f5' } }}>
          <ListItemIcon sx={{ color: '#222', minWidth: 36 }}><AgricultureIcon fontSize="small" /></ListItemIcon>
          Máquina
        </MenuItem>
      </Menu>
    </div>
  );
}
