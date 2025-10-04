import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion.jsx'
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
  HelpCircle
} from 'lucide-react'
import logoImage from './assets/logo.jpeg'
import videoBackground from './assets/climatisation-guadeloupe.mp4'
import './App.css'

function App() {
  const [hoveredCard, setHoveredCard] = useState(null)
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
      note: 5
    },
    {
      nom: "Jean Dembélé",
      avis: "Le chauffe-eau thermodynamique est une merveille. J'ai divisé ma facture d'électricité par deux. Merci !",
      note: 5
    },
    {
      nom: "Sophie Martin",
      avis: "Très satisfaite de mon brasseur d'air. Silencieux et performant. Service au top.",
      note: 5
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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulaire soumis:', formData)
    // Ici vous pourriez ajouter la logique d'envoi du formulaire
  }

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
            <img src={logoImage} alt="CLIMKÉRA" className="h-10 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#accueil" className="text-gray-700 hover:text-blue-600 transition-colors">Accueil</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#packs" className="text-gray-700 hover:text-blue-600 transition-colors">Packs</a>
            <a href="#temoignages" className="text-gray-700 hover:text-blue-600 transition-colors">Témoignages</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
        </div>
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
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                  Demander un devis
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                  Prendre RDV
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:justify-self-end"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Card className="bg-white/90 shadow-xl border-0 p-6 text-gray-800">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-center">
                    Nos avantages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
                </CardContent>
              </Card>
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
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {climatiseurs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className={`h-full hover:shadow-xl transition-all duration-300 border-2 ${item.color}`}>
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 bg-white rounded-full w-fit shadow-md">
                      {item.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800">
                      {item.btu}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </CardDescription>
                    <div className="text-2xl font-bold text-blue-600 mb-4">
                      {item.prix}
                    </div>
                    <Button className="w-full">Découvrir</Button>
                  </CardContent>
                </Card>
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
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-300 bg-white">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        animate={{ rotate: hoveredCard === index ? 360 : 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        {service.icon}
                      </motion.div>
                      <CardTitle className="text-xl font-bold text-gray-800">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
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
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 hover:border-blue-400">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl font-bold flex items-center gap-3">
                    <Shield className="w-8 h-8" />
                    Pack Confort & Sécurité
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
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
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Découvrir</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 border-green-200 hover:border-green-400">
                <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl font-bold flex items-center gap-3">
                    <Sun className="w-8 h-8" />
                    Pack Écologique & Économique
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
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
                    <Button className="w-full bg-green-600 hover:bg-green-700">Découvrir</Button>
                  </div>
                </CardContent>
              </Card>
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
                <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(temoignage.note)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-800">
                      {temoignage.nom}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 italic leading-relaxed">
                      "{temoignage.avis}"
                    </p>
                  </CardContent>
                </Card>
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
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nom">Nom complet *</Label>
                      <Input
                        id="nom"
                        value={formData.nom}
                        onChange={(e) => handleInputChange('nom', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telephone">Téléphone *</Label>
                      <Input
                        id="telephone"
                        type="tel"
                        value={formData.telephone}
                        onChange={(e) => handleInputChange('telephone', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="departement">Département</Label>
                      <Select onValueChange={(value) => handleInputChange('departement', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez votre département" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="971">Guadeloupe (971)</SelectItem>
                          <SelectItem value="972">Martinique (972)</SelectItem>
                          <SelectItem value="973">Guyane (973)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="adresse">Adresse</Label>
                    <Input
                      id="adresse"
                      value={formData.adresse}
                      onChange={(e) => handleInputChange('adresse', e.target.value)}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="typeService">Type de service *</Label>
                      <Select onValueChange={(value) => handleInputChange('typeService', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez le service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="installation">Installation</SelectItem>
                          <SelectItem value="depannage">Dépannage</SelectItem>
                          <SelectItem value="entretien">Entretien</SelectItem>
                          <SelectItem value="devis">Devis</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="produit">Produit concerné *</Label>
                      <Select onValueChange={(value) => handleInputChange('produit', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez le produit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="climatisation">Climatisation</SelectItem>
                          <SelectItem value="chauffe-eau-solaire">Chauffe-eau solaire</SelectItem>
                          <SelectItem value="chauffe-eau-thermodynamique">Chauffe-eau thermodynamique</SelectItem>
                          <SelectItem value="brasseur-air">Brasseur d'air</SelectItem>
                          <SelectItem value="videosurveillance">Vidéosurveillance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="dateSouhaitee">Date souhaitée *</Label>
                      <Input
                        id="dateSouhaitee"
                        type="date"
                        value={formData.dateSouhaitee}
                        onChange={(e) => handleInputChange('dateSouhaitee', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="heureSouhaitee">Heure souhaitée *</Label>
                      <Select onValueChange={(value) => handleInputChange('heureSouhaitee', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez l'heure" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="08h-12h">08h - 12h</SelectItem>
                          <SelectItem value="12h-16h">12h - 16h</SelectItem>
                          <SelectItem value="16h-18h">16h - 18h</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Décrivez votre demande..."
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="conditions"
                      checked={formData.accepteConditions}
                      onCheckedChange={(checked) => handleInputChange('accepteConditions', checked)}
                    />
                    <Label htmlFor="conditions" className="text-sm">
                      J'accepte les conditions générales et la politique de confidentialité
                    </Label>
                  </div>
                  
                  <div className="text-center">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg"
                      disabled={!formData.accepteConditions}
                    >
                      Réserver mon rendez-vous
                    </Button>
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
              </CardContent>
            </Card>
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
                <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4">
                      {avantage.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800">
                      {avantage.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {avantage.description}
                    </p>
                  </CardContent>
                </Card>
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
          
          <motion.div variants={fadeInUp}>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:no-underline">
                    <HelpCircle className="w-5 h-5 mr-3 text-blue-500" />
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pl-8 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </motion.section>

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
              <Card className="bg-white shadow-xl border-0 p-6">
                <CardContent className="space-y-6">
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
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <Phone className="w-4 h-4 mr-2" />
                      Nous appeler
                    </Button>
                    <Button variant="outline" className="flex-1 border-green-600 text-green-600 hover:bg-green-50">
                      <Mail className="w-4 h-4 mr-2" />
                      Nous écrire
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="h-96 bg-gray-200 rounded-lg flex items-center justify-center"
            >
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Carte Google Maps</p>
                <p className="text-sm">ZAC de Houelbourg 1, Baie-Mahault</p>
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
              <img src={logoImage} alt="CLIMKÉRA" className="h-12 w-auto mb-4 brightness-0 invert" />
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
                <li>Climatisation</li>
                <li>Chauffe-eau solaire</li>
                <li>Chauffe-eau thermodynamique</li>
                <li>Brasseurs d'air</li>
                <li>Caméras de vidéosurveillance</li>
                <li>Location de climatiseur mobile</li>
                <li>Contrats d'entretien</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">À propos</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Qui sommes-nous</li>
                <li>Nos réalisations</li>
                <li>FAQ</li>
                <li>Contact</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Mentions Légales</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Politique de confidentialité</li>
                <li>CGV</li>
                <li>Contact</li>
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
