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
    githubUrl: Attribute.String;
    linkedInUrl: Attribute.String;
    messengerUrl: Attribute.String;
    phoneNr: Attribute.String;
    myAddress: Attribute.JSON &
      Attribute.CustomField<'plugin::location-field.location'>;
  };
}

export interface ProjectInfoBigImageOrVideo extends Schema.Component {
  collectionName: 'components_project_info_big_image_or_videos';
  info: {
    displayName: 'Big image or video';
    icon: 'picture';
    description: '';
  };
  attributes: {
    imageVideo: Attribute.Media;
    isFullWidthViewport: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    height: Attribute.String;
  };
}

export interface ProjectInfoDescription extends Schema.Component {
  collectionName: 'components_project_info_descriptions';
  info: {
    displayName: 'text';
    description: '';
    icon: 'file';
  };
  attributes: {
    informationText: Attribute.RichText;
    belongsToProcess: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    width: Attribute.Enumeration<['width-100%', 'width-50%']> &
      Attribute.Required &
      Attribute.DefaultTo<'width-100%'>;
    showProcessTitle: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface ProjectInfoFiles extends Schema.Component {
  collectionName: 'components_project_info_files';
  info: {
    displayName: 'files';
    description: '';
  };
  attributes: {
    imagesVideos: Attribute.Component<'project-info.images', true>;
    bigImgOrVideo: Attribute.Component<'project-info.big-image-or-video'>;
  };
}

export interface ProjectInfoImages extends Schema.Component {
  collectionName: 'components_project_info_images';
  info: {
    displayName: 'images';
    description: '';
  };
  attributes: {
    imageVideo: Attribute.Media;
    gridSizeHorizontal: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        max: 25;
      }> &
      Attribute.DefaultTo<1>;
    gridSizeVertical: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        max: 25;
      }> &
      Attribute.DefaultTo<1>;
  };
}

export interface ProjectInfoInANutshellBulletpoint extends Schema.Component {
  collectionName: 'components_project_info_in_a_nutshell_bulletpoints';
  info: {
    displayName: 'inANutshellBulletpoint';
    description: '';
  };
  attributes: {
    bulletpoint: Attribute.String;
  };
}

export interface ProjectInfoInANutshell extends Schema.Component {
  collectionName: 'components_project_info_in_a_nutshells';
  info: {
    displayName: 'inANutshell';
    icon: 'information';
    description: '';
  };
  attributes: {
    theChallenge: Attribute.RichText;
    theSolution: Attribute.RichText;
    theResult: Attribute.RichText;
    challengeBulletPoint: Attribute.Component<
      'project-info.in-a-nutshell-bulletpoint',
      true
    >;
    solutionBulletpoint: Attribute.Component<
      'project-info.in-a-nutshell-bulletpoint',
      true
    >;
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
      'project-info.big-image-or-video': ProjectInfoBigImageOrVideo;
      'project-info.description': ProjectInfoDescription;
      'project-info.files': ProjectInfoFiles;
      'project-info.images': ProjectInfoImages;
      'project-info.in-a-nutshell-bulletpoint': ProjectInfoInANutshellBulletpoint;
      'project-info.in-a-nutshell': ProjectInfoInANutshell;
      'project-info.process': ProjectInfoProcess;
      'project-info.project-urls': ProjectInfoProjectUrls;
    }
  }
}
