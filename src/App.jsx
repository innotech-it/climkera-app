import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Snowflake, 
  Sun, 
  Shield, 
  Zap, 
  Wind, 
  Camera, 
  Wrench, 
  Star, 
  CheckCircle, 
  Calendar, 
  Clock, 
  User, 
  Home, 
  Settings, 
  Award, 
  ThumbsUp, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  HelpCircle,
  Menu,
  X
} from 'lucide-react'
import logoImage from './assets/logo.jpeg'
import videoBackground from './assets/climatisation-guadeloupe.mp4'
import './App.css'

function App() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState(0) // Only first FAQ open by default
  const [showThankYou, setShowThankYou] = useState(false)
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    adresse: '',
    departement: '',
    message: '',
    typeService: '',
    produit: '',
    dateSouhaitee: '',
    heureSouhaitee: '',
    accepteConditions: false
  })

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const climatiseurs = [
    {
      btu: "9000 BTU",
      description: "Idéale pour chambres et petits espaces",
      prix: "À partir de 899€",
      icon: <Snowflake className="w-8 h-8 text-blue-500" />,
      color: "bg-blue-50 border-blue-200"
    },
    {
      btu: "12000 BTU",
      description: "Adaptée aux salons et bureaux moyens",
      prix: "À partir de 1199€",
      icon: <Snowflake className="w-8 h-8 text-green-500" />,
      color: "bg-green-50 border-green-200"
    },
    {
      btu: "18000 BTU",
      description: "Parfaite pour grands séjours ou locaux professionnels",
      prix: "À partir de 1599€",
      icon: <Snowflake className="w-8 h-8 text-orange-500" />,
      color: "bg-orange-50 border-orange-200"
    },
    {
      btu: "24000 BTU",
      description: "Conçue pour les espaces volumineux et collectifs",
      prix: "À partir de 2199€",
      icon: <Snowflake className="w-8 h-8 text-purple-500" />,
      color: "bg-purple-50 border-purple-200"
    }
  ]

  const services = [
    {
      title: "Chauffe-eau solaire",
      description: "Solution écologique et économique pour profiter du soleil de Guadeloupe",
      icon: <Sun className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Chauffe-eau thermodynamique",
      description: "Production d'eau chaude via pompe à chaleur, jusqu'à 70% d'économie d'énergie",
      icon: <Zap className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Brasseurs d'air",
      description: "Ventilateurs plafonniers ou muraux, silencieux et esthétiques",
      icon: <Wind className="w-8 h-8 text-green-500" />
    },
    {
      title: "Caméras de vidéosurveillance",
      description: "Installation et maintenance de systèmes de sécurité (contrôle à distance, enregistrements sécurisés)",
      icon: <Camera className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Location de climatiseur mobile",
      description: "Pour événement ou pour votre climatiseur en panne",
      icon: <Wrench className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Contrats d'entretien",
      description: "Pour garantir performance et durabilité des équipements",
      icon: <Settings className="w-8 h-8 text-red-500" />
    }
  ]

  const temoignages = [
    {
      nom: "Marie Dubois",
      avis: "Service exceptionnel! Installation rapide et efficace. Je recommande CLIMKÉRA pour tous vos besoins en climatisation.",
      note: 5,
      avatar: "MD"
    },
    {
      nom: "Jean Dembélé",
      avis: "Le chauffe-eau thermodynamique est une merveille. J'ai divisé ma facture d'électricité par deux. Merci !",
      note: 5,
      avatar: "JD"
    },
    {
      nom: "Sophie Martin",
      avis: "Très satisfaite de mon brasseur d'air. Silencieux et performant. Service au top.",
      note: 5,
      avatar: "SM"
    }
  ]

  const avantages = [
    {
      title: "Devis gratuit",
      description: "Obtenez un devis personnalisé sans engagement",
      icon: <CheckCircle className="w-12 h-12 text-green-500" />
    },
    {
      title: "Garantie 2 ans",
      description: "Sur tous nos équipements et installations",
      icon: <Shield className="w-12 h-12 text-blue-500" />
    },
    {
      title: "Intervention rapide",
      description: "Nos équipes interviennent dans les plus brefs délais",
      icon: <Zap className="w-12 h-12 text-orange-500" />
    }
  ]

  const faqItems = [
    {
      question: "Quels types de climatiseurs installez-vous ?",
      answer: "Nous installons une large gamme de climatiseurs, des modèles résidentiels (9000 BTU pour chambres, 12000 BTU pour salons) aux modèles professionnels (18000 BTU pour grands séjours, 24000 BTU pour espaces volumineux)."
    },
    {
      question: "Proposez-vous des services d'entretien ?",
      answer: "Oui, nous offrons des contrats d'entretien annuels pour garantir la performance et la durabilité de vos équipements de climatisation et de vidéosurveillance."
    },
    {
      question: "Quelle est la durée de la garantie sur vos installations ?",
      answer: "Toutes nos installations bénéficient d'une garantie de 2 ans, pièces et main d'œuvre."
    },
    {
      question: "Intervenez-vous sur toute la Guadeloupe ?",
      answer: "Oui, notre équipe assure une intervention rapide sur toute la Guadeloupe pour l'installation, l'entretien et le dépannage."
    },
    {
      question: "Comment puis-je obtenir un devis gratuit ?",
      answer: "Vous pouvez demander un devis gratuit en remplissant notre formulaire de contact en ligne ou en nous appelant directement aux numéros indiqués."
    }
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    // Prevent default form submission
    e.preventDefault();
    
    // Create form data object
    const formDataObj = new FormData(e.target);
    
    try {
      // Submit form to Formspree using fetch
      const response = await fetch('https://formspree.io/f/xzzjvdgn', {
        method: 'POST',
        body: formDataObj,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        // Show thank you page
        setShowThankYou(true);
      } else {
        // Handle error
        alert('Une erreur s\'est produite lors de l\'envoi du formulaire. Veuillez réessayer.');
      }
    } catch (error) {
      // Handle network error
      alert('Une erreur s\'est produite lors de l\'envoi du formulaire. Veuillez réessayer.');
      console.error('Error:', error);
    }
    
    // Reset form after a delay
    setTimeout(() => {
      setFormData({
        nom: '',
        telephone: '',
        email: '',
        adresse: '',
        departement: '',
        message: '',
        typeService: '',
        produit: '',
        dateSouhaitee: '',
        heureSouhaitee: '',
        accepteConditions: false
      });
    }, 3000);
  }

  // Simple avatar component
  const Avatar = ({ initials, className = "" }) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-yellow-500",
      "bg-pink-500",
      "bg-indigo-500"
    ];
    
    const getRandomColor = (name) => {
      const charIndex = name.charCodeAt(0) || 0;
      return colors[charIndex % colors.length];
    };
    
    return (
      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${getRandomColor(initials)} ${className}`}>
        {initials}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header / Navigation */}
      <motion.header 
        className="bg-white shadow-sm border-b sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="#accueil">
              <img src={logoImage} alt="CLIMKÉRA" className="h-10 w-auto" />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#accueil" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Accueil</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
            <a href="#packs" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Packs</a>
            <a href="#temoignages" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Témoignages</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">FAQ</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium">Prise de rendez-vous</a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden bg-white border-t"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-2 space-y-1">
                <a 
                  href="#accueil" 
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Accueil
                </a>
                <a 
                  href="#services" 
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a 
                  href="#packs" 
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Packs
                </a>
                <a 
                  href="#temoignages" 
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Témoignages
                </a>
                <a 
                  href="#faq" 
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </a>
                <a 
                  href="#contact" 
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
              <div className="px-4 py-4 border-t border-gray-200">
                <a 
                  href="#contact" 
                  className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Prise de rendez-vous
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        id="accueil"
        className="relative py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-50"
          src={videoBackground}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 to-green-600/70 z-10"></div>
        <div className="relative max-w-6xl mx-auto z-20 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Votre expert en{' '}
                <span className="text-blue-200">climatisation</span> et{' '}
                <span className="text-green-200">confort</span> en Guadeloupe
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                CLIMKÉRA est une entreprise locale spécialisée dans l'installation, l'entretien et le dépannage de systèmes de climatisation, adaptée aux besoins des particuliers et professionnels en Guadeloupe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#contact" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-md font-medium transition-colors text-center">
                  Demander un devis
                </a>
                <a href="#contact" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-md font-medium transition-colors text-center">
                  Prendre RDV
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:justify-self-end"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="bg-white/90 shadow-xl border-0 p-6 text-gray-800 rounded-lg">
                <div className="pb-4">
                  <h2 className="text-2xl font-bold text-center">
                    Nos avantages
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-lg">Devis gratuits</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-blue-500" />
                    <span className="text-lg">Garantie 2 ans</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-6 h-6 text-orange-500" />
                    <span className="text-lg">Intervention rapide</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Notre Spécialité - Climatisation */}
      <motion.section 
        id="services"
        className="py-20 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Notre spécialité : la climatisation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous proposons une large gamme de climatiseurs performants, silencieux et économiques
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              Nos experts sélectionnent pour vous les meilleurs équipements adaptés à votre espace et à votre budget. 
              Chaque installation est réalisée avec soin par notre équipe certifiée pour garantir votre confort et votre sécurité. 
              Profitez d'une fraîcheur optimale toute l'année grâce à nos solutions sur mesure.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {climatiseurs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`h-full hover:shadow-xl transition-all duration-300 border-2 rounded-lg ${item.color} p-6`}>
                  <div className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 bg-white rounded-full w-fit shadow-md">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {item.btu}
                    </h3>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="text-2xl font-bold text-blue-600 mb-4">
                      {item.prix}
                    </div>
                    <a href="#contact" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors text-center block">Découvrir</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Solutions Complémentaires */}
      <motion.section 
        className="py-20 px-4 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Nos solutions complémentaires
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Parce que le confort passe aussi par l'énergie et la sécurité, CLIMKÉRA vous propose des services adaptés
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <div className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-300 bg-white rounded-lg p-6">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        animate={{ rotate: hoveredCard === index ? 360 : 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        {service.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Packs CLIMKÉRA */}
      <motion.section 
        id="packs"
        className="py-20 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Nos Packs CLIMKÉRA
            </h2>
            <p className="text-xl text-gray-600">
              Offres exclusives en Guadeloupe
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp}>
              <div className="h-full hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 hover:border-blue-400 rounded-lg">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg p-6">
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <Shield className="w-8 h-8" />
                    Pack Confort & Sécurité
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4 text-gray-700 mb-6">
                    <li className="flex items-start gap-3">
                      <Snowflake className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <span>Climatisation dernière génération</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Camera className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                      <span>Caméras de vidéosurveillance connectées</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Wrench className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <span>Installation professionnelle et rapide incluse</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Contrat entretien annuel (climatisation + caméra)</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-4">À partir de 3499€</div>
                    <a href="#contact" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors text-center block">Découvrir</a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <div className="h-full hover:shadow-2xl transition-all duration-300 border-2 border-green-200 hover:border-green-400 rounded-lg">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg p-6">
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <Sun className="w-8 h-8" />
                    Pack Écologique & Économique
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4 text-gray-700 mb-6">
                    <li className="flex items-start gap-3">
                      <Snowflake className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <span>Climatisation éco-performante</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Wind className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Brasseur d'air design & économique</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span>Installation clé en main avec optimisation énergétique</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-4">À partir de 2899€</div>
                    <a href="#contact" className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors text-center block">Découvrir</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Témoignages */}
      <motion.section 
        id="temoignages"
        className="py-20 px-4 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les avis de nos clients satisfaits
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {temoignages.map((temoignage, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-full hover:shadow-xl transition-all duration-300 bg-white rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar initials={temoignage.avatar} />
                    <div>
                      <h3 className="text-lg font-bold text-gray-8800">
                        {temoignage.nom}
                      </h3>
                      <div className="flex items-center gap-1">
                        {[...Array(temoignage.note)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600 italic leading-relaxed">
                      "{temoignage.avis}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Formulaire de Prise de Rendez-vous */}
      <motion.section 
        id="contact"
        className="py-20 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Prise de rendez-vous
            </h2>
            <p className="text-xl text-gray-600">
              Remplissez notre formulaire et nous vous recontacterons dans les plus brefs délais
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <div className="shadow-xl border-0 rounded-lg">
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Nom complet *</label>
                      <input
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={(e) => handleInputChange('nom', e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">Téléphone *</label>
                      <input
                        id="telephone"
                        name="telephone"
                        type="tel"
                        value={formData.telephone}
                        onChange={(e) => handleInputChange('telephone', e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="departement" className="block text-sm font-medium text-gray-700">Département</label>
                      <select 
                        id="departement"
                        name="departement"
                        onChange={(e) => handleInputChange('departement', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Sélectionnez votre département</option>
                        <option value="971">Guadeloupe (971)</option>
                        <option value="972">Martinique (972)</option>
                        <option value="973">Guyane (973)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="adresse" className="block text-sm font-medium text-gray-700">Adresse</label>
                    <input
                      id="adresse"
                      name="adresse"
                      value={formData.adresse}
                      onChange={(e) => handleInputChange('adresse', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="typeService" className="block text-sm font-medium text-gray-700">Type de service *</label>
                      <select 
                        id="typeService"
                        name="typeService"
                        onChange={(e) => handleInputChange('typeService', e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Sélectionnez le service</option>
                        <option value="installation">Installation</option>
                        <option value="depannage">Dépannage</option>
                        <option value="entretien">Entretien</option>
                        <option value="devis">Devis</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="produit" className="block text-sm font-medium text-gray-700">Produit concerné *</label>
                      <select 
                        id="produit"
                        name="produit"
                        onChange={(e) => handleInputChange('produit', e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Sélectionnez le produit</option>
                        <option value="climatisation">Climatisation</option>
                        <option value="chauffe-eau-solaire">Chauffe-eau solaire</option>
                        <option value="chauffe-eau-thermodynamique">Chauffe-eau thermodynamique</option>
                        <option value="brasseur-air">Brasseur d'air</option>
                        <option value="videosurveillance">Vidéosurveillance</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="dateSouhaitee" className="block text-sm font-medium text-gray-700">Date souhaitée *</label>
                      <input
                        id="dateSouhaitee"
                        name="dateSouhaitee"
                        type="date"
                        value={formData.dateSouhaitee}
                        onChange={(e) => handleInputChange('dateSouhaitee', e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="heureSouhaitee" className="block text-sm font-medium text-gray-700">Heure souhaitée *</label>
                      <select 
                        id="heureSouhaitee"
                        name="heureSouhaitee"
                        onChange={(e) => handleInputChange('heureSouhaitee', e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Sélectionnez l'heure</option>
                        <option value="08h-12h">08h - 12h</option>
                        <option value="12h-16h">12h - 16h</option>
                        <option value="16h-18h">16h - 18h</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Décrivez votre demande..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input
                      id="conditions"
                      name="conditions"
                      type="checkbox"
                      checked={formData.accepteConditions}
                      onChange={(e) => handleInputChange('accepteConditions', e.target.checked)}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="conditions" className="text-sm text-gray-700">
                      J'accepte les conditions générales et la politique de confidentialité
                    </label>
                  </div>
                  
                  <div className="text-center">
                    <button 
                      type="submit" 
                      className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg rounded-md text-white font-medium transition-colors disabled:opacity-50"
                      disabled={!formData.accepteConditions}
                    >
                      Réserver mon rendez-vous
                    </button>
                    <div className="mt-4 text-gray-600">
                      <p>Ou appelez-nous directement :</p>
                      <div className="flex justify-center gap-4 mt-2">
                        <a href="tel:0690970404" className="text-blue-600 font-semibold">0690 97 04 04</a>
                        <span>/</span>
                        <a href="tel:0590532361" className="text-blue-600 font-semibold">0590 53 23 61</a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Pourquoi nous choisir */}
      <motion.section 
        className="py-20 px-4 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Pourquoi nous choisir ?
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {avantages.map((avantage, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-full hover:shadow-xl transition-all duration-300 bg-white text-center rounded-lg p-6">
                  <div>
                    <div className="mx-auto mb-4">
                      {avantage.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {avantage.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-gray-600 leading-relaxed">
                      {avantage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section FAQ */}
      <motion.section 
        id="faq"
        className="py-20 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Retrouvez ici les réponses aux questions les plus posées par nos clients.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full p-4 bg-gray-50 rounded-t-lg text-left flex justify-between items-center"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                    <HelpCircle className="w-5 h-5 mr-3 text-blue-500" />
                    {item.question}
                  </h3>
                  <svg 
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${openFaqIndex === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaqIndex === index && (
                  <div className="p-4 bg-white rounded-b-lg">
                    <p className="text-gray-700 pl-8 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Thank You Page */}
      {showThankYou && (
        <motion.section 
          className="py-20 px-4 bg-gray-50 min-h-screen flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Merci pour votre demande !</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Votre demande de rendez-vous a été envoyée avec succès. Notre équipe vous contactera dans les plus brefs délais.
              </p>
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8 text-left max-w-md mx-auto">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Récapitulatif de votre demande :</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Nom :</strong> {formData.nom}</li>
                  <li><strong>Téléphone :</strong> {formData.telephone}</li>
                  <li><strong>Email :</strong> {formData.email}</li>
                  <li><strong>Type de service :</strong> {formData.typeService}</li>
                  <li><strong>Date souhaitée :</strong> {formData.dateSouhaitee}</li>
                </ul>
              </div>
              <button 
                onClick={() => setShowThankYou(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-colors text-lg"
              >
                Retour à l'accueil
              </button>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Nos coordonnées */}
      <motion.section 
        className="py-20 px-4 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Nos coordonnées
            </h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <div className="bg-white shadow-xl border-0 rounded-lg p-6">
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">CLIMKÉRA</h3>
                    <p className="text-gray-600">Votre expert en climatisation et confort en Guadeloupe</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-6 h-6 text-blue-500" />
                      <div>
                        <p className="font-semibold">Téléphone</p>
                        <p className="text-blue-600">0690 97 04 04</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="w-6 h-6 text-green-500" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-green-600">climkera@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="w-6 h-6 text-red-500 mt-1" />
                      <div>
                        <p className="font-semibold">Adresse</p>
                        <p className="text-gray-600">ZAC de Houelbourg 1, Boulevard de la Pointe Jarry, 97122 Baie-Mahault</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <a 
                      href="tel:0690970404" 
                      className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Nous appeler
                    </a>
                    <a 
                      href="mailto:climkera@gmail.com" 
                      className="flex-1 border-2 border-green-600 text-green-600 py-2 rounded-md hover:bg-green-50 transition-colors flex items-center justify-center"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Nous écrire
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="h-96 rounded-lg overflow-hidden"
            >
              <iframe 
                src="https://www.openstreetmap.org/export/embed.html?bbox=-61.562,16.252,-61.560,16.254&amp;layer=mapnik&amp;marker=16.2531281,-61.5614545#map=17/16.2531281/-61.5614545" 
                width="100%" 
                height="100%" 
                style={{ border: 'none' }}
                title="Carte OpenStreetMap - CLIMKÉRA"
              ></iframe>
              <div className="absolute bottom-0 left-0 bg-white/80 backdrop-blur-sm p-2 text-xs text-gray-700">
                <a href="https://www.openstreetmap.org/?mlat=16.2531281&amp;mlon=-61.5614545#map=17/16.2531281/-61.5614545" target="_blank" rel="noopener noreferrer">
                  Voir en plus grand (© OpenStreetMap)
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src={logoImage} alt="CLIMKÉRA" className="h-12 w-auto mb-4" />
              <p className="text-gray-300 mb-4">
                Votre expert en climatisation et confort en Guadeloupe.
              </p>
              <div className="flex gap-4">
                <Facebook className="w-6 h-6 text-blue-400 hover:text-blue-300 cursor-pointer" />
                <Instagram className="w-6 h-6 text-pink-400 hover:text-pink-300 cursor-pointer" />
                <Linkedin className="w-6 h-6 text-blue-400 hover:text-blue-300 cursor-pointer" />
                <Twitter className="w-6 h-6 text-blue-400 hover:text-blue-300 cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#services" className="hover:text-white transition-colors">Climatisation</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Chauffe-eau solaire</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Chauffe-eau thermodynamique</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Brasseurs d'air</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Caméras de vidéosurveillance</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Location de climatiseur mobile</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Contrats d'entretien</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">À propos</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#accueil" className="hover:text-white transition-colors">Qui sommes-nous</a></li>
                <li><a href="#temoignages" className="hover:text-white transition-colors">Nos réalisations</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Mentions Légales</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CGV</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CLIMKÉRA. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App