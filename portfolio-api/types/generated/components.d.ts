import type { Schema, Attribute } from '@strapi/strapi';

export interface HeaderNavLogoSite extends Schema.Component {
  collectionName: 'components_header_nav_logo_sites';
  info: {
    displayName: 'logoSite';
  };
  attributes: {
    logoImg: Attribute.Media;
    logoText: Attribute.String;
  };
}

export interface HeaderNavNavItems extends Schema.Component {
  collectionName: 'components_header_nav_nav_items';
  info: {
    displayName: 'navItems';
  };
  attributes: {
    itemText: Attribute.String & Attribute.Required;
    itemUrl: Attribute.String & Attribute.Required;
  };
}

export interface PersonalInfoContactInfo extends Schema.Component {
  collectionName: 'components_personal_info_contact_infos';
  info: {
    displayName: 'contactInfo';
    icon: 'phone';
    description: '';
  };
  attributes: {
    email: Attribute.Email & Attribute.Required;
    phoneNr: Attribute.BigInteger;
    githubUrl: Attribute.String;
    linkedInUrl: Attribute.String;
  };
}

export interface ProjectInfoDescription extends Schema.Component {
  collectionName: 'components_project_info_descriptions';
  info: {
    displayName: 'description';
    description: '';
  };
  attributes: {
    description: Attribute.RichText;
  };
}

export interface ProjectInfoFiles extends Schema.Component {
  collectionName: 'components_project_info_files';
  info: {
    displayName: 'files';
    description: '';
  };
  attributes: {
    videos: Attribute.Media;
    images: Attribute.Component<'project-info.images', true>;
  };
}

export interface ProjectInfoImages extends Schema.Component {
  collectionName: 'components_project_info_images';
  info: {
    displayName: 'images';
    description: '';
  };
  attributes: {
    imagesVertical: Attribute.Media;
    imagesHorizontal: Attribute.Media;
    imagesSquare: Attribute.Media;
  };
}

export interface ProjectInfoInANutshell extends Schema.Component {
  collectionName: 'components_project_info_in_a_nutshells';
  info: {
    displayName: 'inANutshell';
    icon: 'information';
  };
  attributes: {
    theChallenge: Attribute.RichText;
    theSolution: Attribute.RichText;
    theResult: Attribute.RichText;
  };
}

export interface ProjectInfoProcess extends Schema.Component {
  collectionName: 'components_project_info_processes';
  info: {
    displayName: 'process';
    description: '';
  };
  attributes: {
    process: Attribute.RichText;
  };
}

export interface ProjectInfoProjectUrls extends Schema.Component {
  collectionName: 'components_project_info_project_urls';
  info: {
    displayName: 'projectUrls';
    description: '';
  };
  attributes: {
    liveSiteUrl: Attribute.String;
    githubUrl: Attribute.String;
    designFileUrl: Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'header-nav.logo-site': HeaderNavLogoSite;
      'header-nav.nav-items': HeaderNavNavItems;
      'personal-info.contact-info': PersonalInfoContactInfo;
      'project-info.description': ProjectInfoDescription;
      'project-info.files': ProjectInfoFiles;
      'project-info.images': ProjectInfoImages;
      'project-info.in-a-nutshell': ProjectInfoInANutshell;
      'project-info.process': ProjectInfoProcess;
      'project-info.project-urls': ProjectInfoProjectUrls;
    }
  }
}
