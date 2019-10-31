/**
 * List of all select queries
 */
const OrganisationFields = 'sequence, title, url, imageUrl'
const OrganisationTranslationFields = 'sequence, title, description, claim'
const VendorFields = 'sequence'
const ClientFields = 'sequence, '
const CommunityFields = 'sequence, '

const AddressFields = 'sequence, address, address2, zip, city, state, country'
const ContactFields = 'sequence, firstName, lastName, url, email, phone'

const IndustryFields = 'sequence'
const IndustryTranslationFields = 'sequence, title, description'

const ProductFields = 'sequence, title, downloadUrl, links, imageUrl'
const ProductTranslationFields = 'sequence, description'

const ProductCategoryFields = 'sequence'
const ProductCategoryTranslationFields = 'sequence, title, group, description'

const SuccessStoryFields = 'sequence'
const SuccessStoryTranslationFields = 'sequence, title, lead, base, goal, proposal, outcome'

const LanguageFields = 'sequence, short, name'

const VendorProvidesProductsFields = 'service_type, claim'
const VendorIsPartOfCommunityFields = 'confirmed, level'

const ClientIsPartOfCommunityFields = 'confirmed, level'

const VendorBaseFields = `{
  ${OrganisationFields}
  ${VendorFields}
  address { ${AddressFields }}
  translations { 
    ${OrganisationTranslationFields }
    language { ${LanguageFields}}
  }
  products {
    ${VendorProvidesProductsFields}
    Product { 
      ${ProductFields} 
      category { ${ProductCategoryFields } }
      translations { 
        ${ProductTranslationFields} 
        language { ${LanguageFields}}
      }
    }
  }
  successStories { 
    ${SuccessStoryFields}
    translations { ${SuccessStoryTranslationFields }}
  }
  communities {
    ${VendorIsPartOfCommunityFields}
    Community { 
      ${OrganisationFields}
      ${CommunityFields }
      translations {
        ${OrganisationTranslationFields}
        language { ${LanguageFields}}
      }
    }
  }
}`

const ClientBaseFields = `{
  ${OrganisationFields}
  ${ClientFields}
  address { ${AddressFields}}
  translations { 
    ${OrganisationTranslationFields }
    language { ${LanguageFields}}
  }
  industry { 
    ${IndustryFields }
    translations {
      ${IndustryTranslationFields}
      language { ${LanguageFields}}
    }
  }
  successStories { 
    ${SuccessStoryFields}
    translations { ${SuccessStoryTranslationFields }}
  }
  communities {
    ${ClientIsPartOfCommunityFields}
    Community { 
      ${OrganisationFields}
      ${CommunityFields }
      translations {
        ${OrganisationTranslationFields}
        language { ${LanguageFields}}
      }
    }
  }

}`

const CommunityBaseFields = `{
  ${OrganisationFields}
  ${CommunityFields}
  address { ${AddressFields}}
  translations { 
    ${OrganisationTranslationFields }
    language { ${LanguageFields}}
  }
  products { 
    ${ProductFields}
    translation {
      ${ProductTranslationFields}
      language { ${LanguageFields}}
    }
  }
  vendors {
    ${VendorIsPartOfCommunityFields}
    Vendor {
      ${OrganisationFields}
      ${VendorFields}
      address { ${AddressFields }}
      translations { 
        ${OrganisationTranslationFields }
        language { ${LanguageFields}}
      }
    }
  }
  clients {
    ${OrganisationFields}
    ${ClientFields}
    address { ${AddressFields}}
    translations { 
      ${OrganisationTranslationFields }
      language { ${LanguageFields}}
    }
    industry { 
      ${IndustryFields }
      translations {
        ${IndustryTranslationFields}
        language { ${LanguageFields}}
      }
    }
  }
}`

const ProductCategoryBaseFields = `{
  ${ProductCategoryFields}
  translations {
    ${ProductCategoryTranslationFields}
    language { ${LanguageFields }}
  }
  products {
    ${ProductFields}
    translations {
      ${ProductTranslationFields}
      language { ${LanguageFields }}
    }
  }
}`

const IndustryBaseFields = `{
  ${IndustryFields}
  translations {
    ${IndustryTranslationFields}
    language { ${LanguageFields}}
  }
  clients {
    ${OrganisationFields}
    ${ClientFields}
    address { ${AddressFields}}
    translations { 
      ${OrganisationTranslationFields }
      language { ${LanguageFields}}
    }
  }
}`

const ProductBaseFields = `{
  ${ProductFields}
  translations {
    ${ProductTranslationFields}
    language { ${LanguageFields }}
  }
  category {
    ${ProductCategoryFields}
    translations {
      ${ProductCategoryTranslationFields}
      language { ${LanguageFields }}
    }
  }
  vendors {
    ${VendorProvidesProductsFields}
    Vendor {
      ${OrganisationFields}
      ${VendorFields}
      address { ${AddressFields }}
      translations { 
        ${OrganisationTranslationFields }
        language { ${LanguageFields}}
      }
    }
  }
  communites {
    ${OrganisationFields}
    ${CommunityFields }
    translations {
      ${OrganisationTranslationFields}
      language { ${LanguageFields}}
    }
  }
  clients {
    ${OrganisationFields}
    ${ClientFields}
    address { ${AddressFields}}
    translations { 
      ${OrganisationTranslationFields }
      language { ${LanguageFields}}
    }
  }
}`

const SuccessStoryBaseFields = `{
  ${SuccessStoryFields}
  translations {
    ${SuccessStoryTranslationFields}
    language { ${LanguageFields}}
  }
  client {
    ${OrganisationFields}
    ${ClientFields}
    address { ${AddressFields}}
    translations { 
      ${OrganisationTranslationFields }
      language { ${LanguageFields}}
    }
  }
  vendor {
    ${OrganisationFields}
    ${VendorFields}
    address { ${AddressFields }}
    translations { 
      ${OrganisationTranslationFields }
      language { ${LanguageFields}}
    }
  }
  products {
    ${ProductFields}
    translations {
      ${ProductTranslationFields}
      language { ${LanguageFields }}
    }
  }
}`

export const VendorQuery = {
  query : `query vendor($sequence : Int){
    list : Vendor(sequence : $sequence)${VendorBaseFields}}`,
  variables : { sequence : null}
}

export const ClientQuery = {
  query : `query client($sequence : Int){
    list : Client(sequence : $sequence)${ClientBaseFields}}`,
  variables : { sequence : null}
}
    
export const CommunityQuery = { 
  query : `query community($sequence : Int){
    list : Community(sequence : $sequence)${CommunityBaseFields}}`, 
  variables : { sequence : null}
};

export const ProductCategoryQuery = { 
  query : `query productcategory($sequence : Int){
    list : ProductCategory(sequence : $sequence)${ProductCategoryBaseFields}}`, 
  variables : { sequence : null }
};

export const IndustryQuery = { 
  query : `query industry($sequence : Int){
    list : Industry(sequence : $sequence)${IndustryBaseFields}}`, 
  variables : {sequence : null}
};

export const ProductQuery = { 
  query : `query product($sequence : Int){
    list : Product(sequence : $sequence)${ProductBaseFields}}`, 
  variables : {sequence : null}
};

export const SuccessStoryQuery = { 
  query : `query successstory($sequence : Int){
    list : SuccessStory(sequence : $sequence)${SuccessStoryBaseFields}}`, 
  variables : {sequence : null} 
};



