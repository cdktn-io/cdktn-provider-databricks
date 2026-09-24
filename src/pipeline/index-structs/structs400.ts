/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { PipelineIngestionDefinitionObjectsTableConnectorOptionsApiSourceConnectorOptions,
pipelineIngestionDefinitionObjectsTableConnectorOptionsApiSourceConnectorOptionsToTerraform,
pipelineIngestionDefinitionObjectsTableConnectorOptionsApiSourceConnectorOptionsToHclTerraform,
PipelineIngestionDefinitionObjectsTableConnectorOptionsApiSourceConnectorOptionsOutputReference,
PipelineIngestionDefinitionObjectsTableConnectorOptionsConfluenceOptions,
pipelineIngestionDefinitionObjectsTableConnectorOptionsConfluenceOptionsToTerraform,
pipelineIngestionDefinitionObjectsTableConnectorOptionsConfluenceOptionsToHclTerraform,
PipelineIngestionDefinitionObjectsTableConnectorOptionsConfluenceOptionsOutputReference,
PipelineIngestionDefinitionObjectsTableConnectorOptionsGdriveOptions,
pipelineIngestionDefinitionObjectsTableConnectorOptionsGdriveOptionsToTerraform,
pipelineIngestionDefinitionObjectsTableConnectorOptionsGdriveOptionsToHclTerraform,
PipelineIngestionDefinitionObjectsTableConnectorOptionsGdriveOptionsOutputReference,
PipelineIngestionDefinitionObjectsTableConnectorOptionsGoogleAdsOptions,
pipelineIngestionDefinitionObjectsTableConnectorOptionsGoogleAdsOptionsToTerraform,
pipelineIngestionDefinitionObjectsTableConnectorOptionsGoogleAdsOptionsToHclTerraform,
PipelineIngestionDefinitionObjectsTableConnectorOptionsGoogleAdsOptionsOutputReference,
PipelineIngestionDefinitionObjectsTableConnectorOptionsJiraOptions,
pipelineIngestionDefinitionObjectsTableConnectorOptionsJiraOptionsToTerraform,
pipelineIngestionDefinitionObjectsTableConnectorOptionsJiraOptionsToHclTerraform,
PipelineIngestionDefinitionObjectsTableConnectorOptionsJiraOptionsOutputReference,
PipelineIngestionDefinitionObjectsTableConnectorOptionsKafkaOptions,
pipelineIngestionDefinitionObjectsTableConnectorOptionsKafkaOptionsToTerraform,
pipelineIngestionDefinitionObjectsTableConnectorOptionsKafkaOptionsToHclTerraform,
PipelineIngestionDefinitionObjectsTableConnectorOptionsKafkaOptionsOutputReference,
PipelineIngestionDefinitionObjectsTableConnectorOptionsLinkedinAdsOptions,
pipelineIngestionDefinitionObjectsTableConnectorOptionsLinkedinAdsOptionsToTerraform,
pipelineIngestionDefinitionObjectsTableConnectorOptionsLinkedinAdsOptionsToHclTerraform,
PipelineIngestionDefinitionObjectsTableConnectorOptionsLinkedinAdsOptionsOutputReference,
PipelineIngestionDefinitionObjectsTableConnectorOptionsMarketoOptions,
pipelineIngestionDefinitionObjectsTableConnectorOptionsMarketoOptionsToTerraform,
pipelineIngestionDefinitionObjectsTableConnectorOptionsMarketoOptionsToHclTerraform,
PipelineIngestionDefinitionObjectsTableConnectorOptionsMarketoOptionsOutputReference,
PipelineIngestionDefinitionObjectsTableConnectorOptionsMetaAdsOptions,
pipelineIngestionDefinitionObjectsTableConnectorOptionsMetaAdsOptionsToTerraform,
pipelineIngestionDefinitionObjectsTableConnectorOptionsMetaAdsOptionsToHclTerraform,
PipelineIngestionDefinitionObjectsTableConnectorOptionsMetaAdsOptionsOutputReference,
PipelineIngestionDefinitionObjectsTableConnectorOptionsOutlookOptions,
pipelineIngestionDefinitionObjectsTableConnectorOptionsOutlookOptionsToTerraform,
pipelineIngestionDefinitionObjectsTableConnectorOptionsOutlookOptionsToHclTerraform,
PipelineIngestionDefinitionObjectsTableConnectorOptionsOutlookOptionsOutputReference,
PipelineIngestionDefinitionObjectsTableConnectorOptionsRabbitmqOptions,
pipelineIngestionDefinitionObjectsTableConnectorOptionsRabbitmqOptionsToTerraform,
pipelineIngestionDefinitionObjectsTableConnectorOptionsRabbitmqOptionsToHclTerraform,
PipelineIngestionDefinitionObjectsTableConnectorOptionsRabbitmqOptionsOutputReference,
PipelineIngestionDefinitionObjectsTableConnectorOptionsRedditAdsOptions,
pipelineIngestionDefinitionObjectsTableConnectorOptionsRedditAdsOptionsToTerraform,
pipelineIngestionDefinitionObjectsTableConnectorOptionsRedditAdsOptionsToHclTerraform,
PipelineIngestionDefinitionObjectsTableConnectorOptionsRedditAdsOptionsOutputReference,
PipelineIngestionDefinitionObjectsTableConnectorOptionsSharepointOptions,
pipelineIngestionDefinitionObjectsTableConnectorOptionsSharepointOptionsToTerraform,
pipelineIngestionDefinitionObjectsTableConnectorOptionsSharepointOptionsToHclTerraform,
PipelineIngestionDefinitionObjectsTableConnectorOptionsSharepointOptionsOutputReference,
PipelineIngestionDefinitionObjectsTableConnectorOptionsSmartsheetOptions,
pipelineIngestionDefinitionObjectsTableConnectorOptionsSmartsheetOptionsToTerraform,
pipelineIngestionDefinitionObjectsTableConnectorOptionsSmartsheetOptionsToHclTerraform,
PipelineIngestionDefinitionObjectsTableConnectorOptionsSmartsheetOptionsOutputReference,
PipelineIngestionDefinitionObjectsTableConnectorOptionsTiktokAdsOptions,
pipelineIngestionDefinitionObjectsTableConnectorOptionsTiktokAdsOptionsToTerraform,
pipelineIngestionDefinitionObjectsTableConnectorOptionsTiktokAdsOptionsToHclTerraform,
PipelineIngestionDefinitionObjectsTableConnectorOptionsTiktokAdsOptionsOutputReference,
PipelineIngestionDefinitionObjectsTableConnectorOptionsZendeskSupportOptions,
pipelineIngestionDefinitionObjectsTableConnectorOptionsZendeskSupportOptionsToTerraform,
pipelineIngestionDefinitionObjectsTableConnectorOptionsZendeskSupportOptionsToHclTerraform,
PipelineIngestionDefinitionObjectsTableConnectorOptionsZendeskSupportOptionsOutputReference,
PipelineIngestionDefinitionObjectsReport,
pipelineIngestionDefinitionObjectsReportToTerraform,
pipelineIngestionDefinitionObjectsReportToHclTerraform,
PipelineIngestionDefinitionObjectsReportOutputReference,
PipelineIngestionDefinitionObjectsSchema,
pipelineIngestionDefinitionObjectsSchemaToTerraform,
pipelineIngestionDefinitionObjectsSchemaToHclTerraform,
PipelineIngestionDefinitionObjectsSchemaOutputReference,
PipelineIngestionDefinitionDataStagingOptions,
pipelineIngestionDefinitionDataStagingOptionsToTerraform,
pipelineIngestionDefinitionDataStagingOptionsToHclTerraform,
PipelineIngestionDefinitionDataStagingOptionsOutputReference,
PipelineIngestionDefinitionFullRefreshWindow,
pipelineIngestionDefinitionFullRefreshWindowToTerraform,
pipelineIngestionDefinitionFullRefreshWindowToHclTerraform,
PipelineIngestionDefinitionFullRefreshWindowOutputReference } from './structs0';
export interface PipelineIngestionDefinitionObjectsTableConnectorOptions {
  /**
  * api_source_connector_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#api_source_connector_options Pipeline#api_source_connector_options}
  */
  readonly apiSourceConnectorOptions?: PipelineIngestionDefinitionObjectsTableConnectorOptionsApiSourceConnectorOptions;
  /**
  * confluence_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#confluence_options Pipeline#confluence_options}
  */
  readonly confluenceOptions?: PipelineIngestionDefinitionObjectsTableConnectorOptionsConfluenceOptions;
  /**
  * gdrive_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#gdrive_options Pipeline#gdrive_options}
  */
  readonly gdriveOptions?: PipelineIngestionDefinitionObjectsTableConnectorOptionsGdriveOptions;
  /**
  * google_ads_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#google_ads_options Pipeline#google_ads_options}
  */
  readonly googleAdsOptions?: PipelineIngestionDefinitionObjectsTableConnectorOptionsGoogleAdsOptions;
  /**
  * jira_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#jira_options Pipeline#jira_options}
  */
  readonly jiraOptions?: PipelineIngestionDefinitionObjectsTableConnectorOptionsJiraOptions;
  /**
  * kafka_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#kafka_options Pipeline#kafka_options}
  */
  readonly kafkaOptions?: PipelineIngestionDefinitionObjectsTableConnectorOptionsKafkaOptions;
  /**
  * linkedin_ads_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#linkedin_ads_options Pipeline#linkedin_ads_options}
  */
  readonly linkedinAdsOptions?: PipelineIngestionDefinitionObjectsTableConnectorOptionsLinkedinAdsOptions;
  /**
  * marketo_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#marketo_options Pipeline#marketo_options}
  */
  readonly marketoOptions?: PipelineIngestionDefinitionObjectsTableConnectorOptionsMarketoOptions;
  /**
  * meta_ads_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#meta_ads_options Pipeline#meta_ads_options}
  */
  readonly metaAdsOptions?: PipelineIngestionDefinitionObjectsTableConnectorOptionsMetaAdsOptions;
  /**
  * outlook_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#outlook_options Pipeline#outlook_options}
  */
  readonly outlookOptions?: PipelineIngestionDefinitionObjectsTableConnectorOptionsOutlookOptions;
  /**
  * rabbitmq_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#rabbitmq_options Pipeline#rabbitmq_options}
  */
  readonly rabbitmqOptions?: PipelineIngestionDefinitionObjectsTableConnectorOptionsRabbitmqOptions;
  /**
  * reddit_ads_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#reddit_ads_options Pipeline#reddit_ads_options}
  */
  readonly redditAdsOptions?: PipelineIngestionDefinitionObjectsTableConnectorOptionsRedditAdsOptions;
  /**
  * sharepoint_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#sharepoint_options Pipeline#sharepoint_options}
  */
  readonly sharepointOptions?: PipelineIngestionDefinitionObjectsTableConnectorOptionsSharepointOptions;
  /**
  * smartsheet_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#smartsheet_options Pipeline#smartsheet_options}
  */
  readonly smartsheetOptions?: PipelineIngestionDefinitionObjectsTableConnectorOptionsSmartsheetOptions;
  /**
  * tiktok_ads_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#tiktok_ads_options Pipeline#tiktok_ads_options}
  */
  readonly tiktokAdsOptions?: PipelineIngestionDefinitionObjectsTableConnectorOptionsTiktokAdsOptions;
  /**
  * zendesk_support_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#zendesk_support_options Pipeline#zendesk_support_options}
  */
  readonly zendeskSupportOptions?: PipelineIngestionDefinitionObjectsTableConnectorOptionsZendeskSupportOptions;
}

export function pipelineIngestionDefinitionObjectsTableConnectorOptionsToTerraform(struct?: PipelineIngestionDefinitionObjectsTableConnectorOptionsOutputReference | PipelineIngestionDefinitionObjectsTableConnectorOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_source_connector_options: pipelineIngestionDefinitionObjectsTableConnectorOptionsApiSourceConnectorOptionsToTerraform(struct!.apiSourceConnectorOptions),
    confluence_options: pipelineIngestionDefinitionObjectsTableConnectorOptionsConfluenceOptionsToTerraform(struct!.confluenceOptions),
    gdrive_options: pipelineIngestionDefinitionObjectsTableConnectorOptionsGdriveOptionsToTerraform(struct!.gdriveOptions),
    google_ads_options: pipelineIngestionDefinitionObjectsTableConnectorOptionsGoogleAdsOptionsToTerraform(struct!.googleAdsOptions),
    jira_options: pipelineIngestionDefinitionObjectsTableConnectorOptionsJiraOptionsToTerraform(struct!.jiraOptions),
    kafka_options: pipelineIngestionDefinitionObjectsTableConnectorOptionsKafkaOptionsToTerraform(struct!.kafkaOptions),
    linkedin_ads_options: pipelineIngestionDefinitionObjectsTableConnectorOptionsLinkedinAdsOptionsToTerraform(struct!.linkedinAdsOptions),
    marketo_options: pipelineIngestionDefinitionObjectsTableConnectorOptionsMarketoOptionsToTerraform(struct!.marketoOptions),
    meta_ads_options: pipelineIngestionDefinitionObjectsTableConnectorOptionsMetaAdsOptionsToTerraform(struct!.metaAdsOptions),
    outlook_options: pipelineIngestionDefinitionObjectsTableConnectorOptionsOutlookOptionsToTerraform(struct!.outlookOptions),
    rabbitmq_options: pipelineIngestionDefinitionObjectsTableConnectorOptionsRabbitmqOptionsToTerraform(struct!.rabbitmqOptions),
    reddit_ads_options: pipelineIngestionDefinitionObjectsTableConnectorOptionsRedditAdsOptionsToTerraform(struct!.redditAdsOptions),
    sharepoint_options: pipelineIngestionDefinitionObjectsTableConnectorOptionsSharepointOptionsToTerraform(struct!.sharepointOptions),
    smartsheet_options: pipelineIngestionDefinitionObjectsTableConnectorOptionsSmartsheetOptionsToTerraform(struct!.smartsheetOptions),
    tiktok_ads_options: pipelineIngestionDefinitionObjectsTableConnectorOptionsTiktokAdsOptionsToTerraform(struct!.tiktokAdsOptions),
    zendesk_support_options: pipelineIngestionDefinitionObjectsTableConnectorOptionsZendeskSupportOptionsToTerraform(struct!.zendeskSupportOptions),
  }
}


export function pipelineIngestionDefinitionObjectsTableConnectorOptionsToHclTerraform(struct?: PipelineIngestionDefinitionObjectsTableConnectorOptionsOutputReference | PipelineIngestionDefinitionObjectsTableConnectorOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_source_connector_options: {
      value: pipelineIngestionDefinitionObjectsTableConnectorOptionsApiSourceConnectorOptionsToHclTerraform(struct!.apiSourceConnectorOptions),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsTableConnectorOptionsApiSourceConnectorOptionsList",
    },
    confluence_options: {
      value: pipelineIngestionDefinitionObjectsTableConnectorOptionsConfluenceOptionsToHclTerraform(struct!.confluenceOptions),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsTableConnectorOptionsConfluenceOptionsList",
    },
    gdrive_options: {
      value: pipelineIngestionDefinitionObjectsTableConnectorOptionsGdriveOptionsToHclTerraform(struct!.gdriveOptions),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsTableConnectorOptionsGdriveOptionsList",
    },
    google_ads_options: {
      value: pipelineIngestionDefinitionObjectsTableConnectorOptionsGoogleAdsOptionsToHclTerraform(struct!.googleAdsOptions),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsTableConnectorOptionsGoogleAdsOptionsList",
    },
    jira_options: {
      value: pipelineIngestionDefinitionObjectsTableConnectorOptionsJiraOptionsToHclTerraform(struct!.jiraOptions),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsTableConnectorOptionsJiraOptionsList",
    },
    kafka_options: {
      value: pipelineIngestionDefinitionObjectsTableConnectorOptionsKafkaOptionsToHclTerraform(struct!.kafkaOptions),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsTableConnectorOptionsKafkaOptionsList",
    },
    linkedin_ads_options: {
      value: pipelineIngestionDefinitionObjectsTableConnectorOptionsLinkedinAdsOptionsToHclTerraform(struct!.linkedinAdsOptions),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsTableConnectorOptionsLinkedinAdsOptionsList",
    },
    marketo_options: {
      value: pipelineIngestionDefinitionObjectsTableConnectorOptionsMarketoOptionsToHclTerraform(struct!.marketoOptions),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsTableConnectorOptionsMarketoOptionsList",
    },
    meta_ads_options: {
      value: pipelineIngestionDefinitionObjectsTableConnectorOptionsMetaAdsOptionsToHclTerraform(struct!.metaAdsOptions),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsTableConnectorOptionsMetaAdsOptionsList",
    },
    outlook_options: {
      value: pipelineIngestionDefinitionObjectsTableConnectorOptionsOutlookOptionsToHclTerraform(struct!.outlookOptions),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsTableConnectorOptionsOutlookOptionsList",
    },
    rabbitmq_options: {
      value: pipelineIngestionDefinitionObjectsTableConnectorOptionsRabbitmqOptionsToHclTerraform(struct!.rabbitmqOptions),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsTableConnectorOptionsRabbitmqOptionsList",
    },
    reddit_ads_options: {
      value: pipelineIngestionDefinitionObjectsTableConnectorOptionsRedditAdsOptionsToHclTerraform(struct!.redditAdsOptions),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsTableConnectorOptionsRedditAdsOptionsList",
    },
    sharepoint_options: {
      value: pipelineIngestionDefinitionObjectsTableConnectorOptionsSharepointOptionsToHclTerraform(struct!.sharepointOptions),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsTableConnectorOptionsSharepointOptionsList",
    },
    smartsheet_options: {
      value: pipelineIngestionDefinitionObjectsTableConnectorOptionsSmartsheetOptionsToHclTerraform(struct!.smartsheetOptions),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsTableConnectorOptionsSmartsheetOptionsList",
    },
    tiktok_ads_options: {
      value: pipelineIngestionDefinitionObjectsTableConnectorOptionsTiktokAdsOptionsToHclTerraform(struct!.tiktokAdsOptions),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsTableConnectorOptionsTiktokAdsOptionsList",
    },
    zendesk_support_options: {
      value: pipelineIngestionDefinitionObjectsTableConnectorOptionsZendeskSupportOptionsToHclTerraform(struct!.zendeskSupportOptions),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsTableConnectorOptionsZendeskSupportOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionObjectsTableConnectorOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineIngestionDefinitionObjectsTableConnectorOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiSourceConnectorOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSourceConnectorOptions = this._apiSourceConnectorOptions?.internalValue;
    }
    if (this._confluenceOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confluenceOptions = this._confluenceOptions?.internalValue;
    }
    if (this._gdriveOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gdriveOptions = this._gdriveOptions?.internalValue;
    }
    if (this._googleAdsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleAdsOptions = this._googleAdsOptions?.internalValue;
    }
    if (this._jiraOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jiraOptions = this._jiraOptions?.internalValue;
    }
    if (this._kafkaOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaOptions = this._kafkaOptions?.internalValue;
    }
    if (this._linkedinAdsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkedinAdsOptions = this._linkedinAdsOptions?.internalValue;
    }
    if (this._marketoOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketoOptions = this._marketoOptions?.internalValue;
    }
    if (this._metaAdsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaAdsOptions = this._metaAdsOptions?.internalValue;
    }
    if (this._outlookOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outlookOptions = this._outlookOptions?.internalValue;
    }
    if (this._rabbitmqOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rabbitmqOptions = this._rabbitmqOptions?.internalValue;
    }
    if (this._redditAdsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redditAdsOptions = this._redditAdsOptions?.internalValue;
    }
    if (this._sharepointOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharepointOptions = this._sharepointOptions?.internalValue;
    }
    if (this._smartsheetOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartsheetOptions = this._smartsheetOptions?.internalValue;
    }
    if (this._tiktokAdsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tiktokAdsOptions = this._tiktokAdsOptions?.internalValue;
    }
    if (this._zendeskSupportOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zendeskSupportOptions = this._zendeskSupportOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionObjectsTableConnectorOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiSourceConnectorOptions.internalValue = undefined;
      this._confluenceOptions.internalValue = undefined;
      this._gdriveOptions.internalValue = undefined;
      this._googleAdsOptions.internalValue = undefined;
      this._jiraOptions.internalValue = undefined;
      this._kafkaOptions.internalValue = undefined;
      this._linkedinAdsOptions.internalValue = undefined;
      this._marketoOptions.internalValue = undefined;
      this._metaAdsOptions.internalValue = undefined;
      this._outlookOptions.internalValue = undefined;
      this._rabbitmqOptions.internalValue = undefined;
      this._redditAdsOptions.internalValue = undefined;
      this._sharepointOptions.internalValue = undefined;
      this._smartsheetOptions.internalValue = undefined;
      this._tiktokAdsOptions.internalValue = undefined;
      this._zendeskSupportOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiSourceConnectorOptions.internalValue = value.apiSourceConnectorOptions;
      this._confluenceOptions.internalValue = value.confluenceOptions;
      this._gdriveOptions.internalValue = value.gdriveOptions;
      this._googleAdsOptions.internalValue = value.googleAdsOptions;
      this._jiraOptions.internalValue = value.jiraOptions;
      this._kafkaOptions.internalValue = value.kafkaOptions;
      this._linkedinAdsOptions.internalValue = value.linkedinAdsOptions;
      this._marketoOptions.internalValue = value.marketoOptions;
      this._metaAdsOptions.internalValue = value.metaAdsOptions;
      this._outlookOptions.internalValue = value.outlookOptions;
      this._rabbitmqOptions.internalValue = value.rabbitmqOptions;
      this._redditAdsOptions.internalValue = value.redditAdsOptions;
      this._sharepointOptions.internalValue = value.sharepointOptions;
      this._smartsheetOptions.internalValue = value.smartsheetOptions;
      this._tiktokAdsOptions.internalValue = value.tiktokAdsOptions;
      this._zendeskSupportOptions.internalValue = value.zendeskSupportOptions;
    }
  }

  // api_source_connector_options - computed: false, optional: true, required: false
  private _apiSourceConnectorOptions = new PipelineIngestionDefinitionObjectsTableConnectorOptionsApiSourceConnectorOptionsOutputReference(this, "api_source_connector_options");
  public get apiSourceConnectorOptions() {
    return this._apiSourceConnectorOptions;
  }
  public putApiSourceConnectorOptions(value: PipelineIngestionDefinitionObjectsTableConnectorOptionsApiSourceConnectorOptions) {
    this._apiSourceConnectorOptions.internalValue = value;
  }
  public resetApiSourceConnectorOptions() {
    this._apiSourceConnectorOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSourceConnectorOptionsInput() {
    return this._apiSourceConnectorOptions.internalValue;
  }

  // confluence_options - computed: false, optional: true, required: false
  private _confluenceOptions = new PipelineIngestionDefinitionObjectsTableConnectorOptionsConfluenceOptionsOutputReference(this, "confluence_options");
  public get confluenceOptions() {
    return this._confluenceOptions;
  }
  public putConfluenceOptions(value: PipelineIngestionDefinitionObjectsTableConnectorOptionsConfluenceOptions) {
    this._confluenceOptions.internalValue = value;
  }
  public resetConfluenceOptions() {
    this._confluenceOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confluenceOptionsInput() {
    return this._confluenceOptions.internalValue;
  }

  // gdrive_options - computed: false, optional: true, required: false
  private _gdriveOptions = new PipelineIngestionDefinitionObjectsTableConnectorOptionsGdriveOptionsOutputReference(this, "gdrive_options");
  public get gdriveOptions() {
    return this._gdriveOptions;
  }
  public putGdriveOptions(value: PipelineIngestionDefinitionObjectsTableConnectorOptionsGdriveOptions) {
    this._gdriveOptions.internalValue = value;
  }
  public resetGdriveOptions() {
    this._gdriveOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gdriveOptionsInput() {
    return this._gdriveOptions.internalValue;
  }

  // google_ads_options - computed: false, optional: true, required: false
  private _googleAdsOptions = new PipelineIngestionDefinitionObjectsTableConnectorOptionsGoogleAdsOptionsOutputReference(this, "google_ads_options");
  public get googleAdsOptions() {
    return this._googleAdsOptions;
  }
  public putGoogleAdsOptions(value: PipelineIngestionDefinitionObjectsTableConnectorOptionsGoogleAdsOptions) {
    this._googleAdsOptions.internalValue = value;
  }
  public resetGoogleAdsOptions() {
    this._googleAdsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleAdsOptionsInput() {
    return this._googleAdsOptions.internalValue;
  }

  // jira_options - computed: false, optional: true, required: false
  private _jiraOptions = new PipelineIngestionDefinitionObjectsTableConnectorOptionsJiraOptionsOutputReference(this, "jira_options");
  public get jiraOptions() {
    return this._jiraOptions;
  }
  public putJiraOptions(value: PipelineIngestionDefinitionObjectsTableConnectorOptionsJiraOptions) {
    this._jiraOptions.internalValue = value;
  }
  public resetJiraOptions() {
    this._jiraOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraOptionsInput() {
    return this._jiraOptions.internalValue;
  }

  // kafka_options - computed: false, optional: true, required: false
  private _kafkaOptions = new PipelineIngestionDefinitionObjectsTableConnectorOptionsKafkaOptionsOutputReference(this, "kafka_options");
  public get kafkaOptions() {
    return this._kafkaOptions;
  }
  public putKafkaOptions(value: PipelineIngestionDefinitionObjectsTableConnectorOptionsKafkaOptions) {
    this._kafkaOptions.internalValue = value;
  }
  public resetKafkaOptions() {
    this._kafkaOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaOptionsInput() {
    return this._kafkaOptions.internalValue;
  }

  // linkedin_ads_options - computed: false, optional: true, required: false
  private _linkedinAdsOptions = new PipelineIngestionDefinitionObjectsTableConnectorOptionsLinkedinAdsOptionsOutputReference(this, "linkedin_ads_options");
  public get linkedinAdsOptions() {
    return this._linkedinAdsOptions;
  }
  public putLinkedinAdsOptions(value: PipelineIngestionDefinitionObjectsTableConnectorOptionsLinkedinAdsOptions) {
    this._linkedinAdsOptions.internalValue = value;
  }
  public resetLinkedinAdsOptions() {
    this._linkedinAdsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedinAdsOptionsInput() {
    return this._linkedinAdsOptions.internalValue;
  }

  // marketo_options - computed: false, optional: true, required: false
  private _marketoOptions = new PipelineIngestionDefinitionObjectsTableConnectorOptionsMarketoOptionsOutputReference(this, "marketo_options");
  public get marketoOptions() {
    return this._marketoOptions;
  }
  public putMarketoOptions(value: PipelineIngestionDefinitionObjectsTableConnectorOptionsMarketoOptions) {
    this._marketoOptions.internalValue = value;
  }
  public resetMarketoOptions() {
    this._marketoOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketoOptionsInput() {
    return this._marketoOptions.internalValue;
  }

  // meta_ads_options - computed: false, optional: true, required: false
  private _metaAdsOptions = new PipelineIngestionDefinitionObjectsTableConnectorOptionsMetaAdsOptionsOutputReference(this, "meta_ads_options");
  public get metaAdsOptions() {
    return this._metaAdsOptions;
  }
  public putMetaAdsOptions(value: PipelineIngestionDefinitionObjectsTableConnectorOptionsMetaAdsOptions) {
    this._metaAdsOptions.internalValue = value;
  }
  public resetMetaAdsOptions() {
    this._metaAdsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaAdsOptionsInput() {
    return this._metaAdsOptions.internalValue;
  }

  // outlook_options - computed: false, optional: true, required: false
  private _outlookOptions = new PipelineIngestionDefinitionObjectsTableConnectorOptionsOutlookOptionsOutputReference(this, "outlook_options");
  public get outlookOptions() {
    return this._outlookOptions;
  }
  public putOutlookOptions(value: PipelineIngestionDefinitionObjectsTableConnectorOptionsOutlookOptions) {
    this._outlookOptions.internalValue = value;
  }
  public resetOutlookOptions() {
    this._outlookOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outlookOptionsInput() {
    return this._outlookOptions.internalValue;
  }

  // rabbitmq_options - computed: false, optional: true, required: false
  private _rabbitmqOptions = new PipelineIngestionDefinitionObjectsTableConnectorOptionsRabbitmqOptionsOutputReference(this, "rabbitmq_options");
  public get rabbitmqOptions() {
    return this._rabbitmqOptions;
  }
  public putRabbitmqOptions(value: PipelineIngestionDefinitionObjectsTableConnectorOptionsRabbitmqOptions) {
    this._rabbitmqOptions.internalValue = value;
  }
  public resetRabbitmqOptions() {
    this._rabbitmqOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rabbitmqOptionsInput() {
    return this._rabbitmqOptions.internalValue;
  }

  // reddit_ads_options - computed: false, optional: true, required: false
  private _redditAdsOptions = new PipelineIngestionDefinitionObjectsTableConnectorOptionsRedditAdsOptionsOutputReference(this, "reddit_ads_options");
  public get redditAdsOptions() {
    return this._redditAdsOptions;
  }
  public putRedditAdsOptions(value: PipelineIngestionDefinitionObjectsTableConnectorOptionsRedditAdsOptions) {
    this._redditAdsOptions.internalValue = value;
  }
  public resetRedditAdsOptions() {
    this._redditAdsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redditAdsOptionsInput() {
    return this._redditAdsOptions.internalValue;
  }

  // sharepoint_options - computed: false, optional: true, required: false
  private _sharepointOptions = new PipelineIngestionDefinitionObjectsTableConnectorOptionsSharepointOptionsOutputReference(this, "sharepoint_options");
  public get sharepointOptions() {
    return this._sharepointOptions;
  }
  public putSharepointOptions(value: PipelineIngestionDefinitionObjectsTableConnectorOptionsSharepointOptions) {
    this._sharepointOptions.internalValue = value;
  }
  public resetSharepointOptions() {
    this._sharepointOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharepointOptionsInput() {
    return this._sharepointOptions.internalValue;
  }

  // smartsheet_options - computed: false, optional: true, required: false
  private _smartsheetOptions = new PipelineIngestionDefinitionObjectsTableConnectorOptionsSmartsheetOptionsOutputReference(this, "smartsheet_options");
  public get smartsheetOptions() {
    return this._smartsheetOptions;
  }
  public putSmartsheetOptions(value: PipelineIngestionDefinitionObjectsTableConnectorOptionsSmartsheetOptions) {
    this._smartsheetOptions.internalValue = value;
  }
  public resetSmartsheetOptions() {
    this._smartsheetOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartsheetOptionsInput() {
    return this._smartsheetOptions.internalValue;
  }

  // tiktok_ads_options - computed: false, optional: true, required: false
  private _tiktokAdsOptions = new PipelineIngestionDefinitionObjectsTableConnectorOptionsTiktokAdsOptionsOutputReference(this, "tiktok_ads_options");
  public get tiktokAdsOptions() {
    return this._tiktokAdsOptions;
  }
  public putTiktokAdsOptions(value: PipelineIngestionDefinitionObjectsTableConnectorOptionsTiktokAdsOptions) {
    this._tiktokAdsOptions.internalValue = value;
  }
  public resetTiktokAdsOptions() {
    this._tiktokAdsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tiktokAdsOptionsInput() {
    return this._tiktokAdsOptions.internalValue;
  }

  // zendesk_support_options - computed: false, optional: true, required: false
  private _zendeskSupportOptions = new PipelineIngestionDefinitionObjectsTableConnectorOptionsZendeskSupportOptionsOutputReference(this, "zendesk_support_options");
  public get zendeskSupportOptions() {
    return this._zendeskSupportOptions;
  }
  public putZendeskSupportOptions(value: PipelineIngestionDefinitionObjectsTableConnectorOptionsZendeskSupportOptions) {
    this._zendeskSupportOptions.internalValue = value;
  }
  public resetZendeskSupportOptions() {
    this._zendeskSupportOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zendeskSupportOptionsInput() {
    return this._zendeskSupportOptions.internalValue;
  }
}
export interface PipelineIngestionDefinitionObjectsTableTableConfigurationAutoFullRefreshPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#enabled Pipeline#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#min_interval_hours Pipeline#min_interval_hours}
  */
  readonly minIntervalHours?: number;
}

export function pipelineIngestionDefinitionObjectsTableTableConfigurationAutoFullRefreshPolicyToTerraform(struct?: PipelineIngestionDefinitionObjectsTableTableConfigurationAutoFullRefreshPolicyOutputReference | PipelineIngestionDefinitionObjectsTableTableConfigurationAutoFullRefreshPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    min_interval_hours: cdktn.numberToTerraform(struct!.minIntervalHours),
  }
}


export function pipelineIngestionDefinitionObjectsTableTableConfigurationAutoFullRefreshPolicyToHclTerraform(struct?: PipelineIngestionDefinitionObjectsTableTableConfigurationAutoFullRefreshPolicyOutputReference | PipelineIngestionDefinitionObjectsTableTableConfigurationAutoFullRefreshPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_interval_hours: {
      value: cdktn.numberToHclTerraform(struct!.minIntervalHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionObjectsTableTableConfigurationAutoFullRefreshPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineIngestionDefinitionObjectsTableTableConfigurationAutoFullRefreshPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._minIntervalHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.minIntervalHours = this._minIntervalHours;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionObjectsTableTableConfigurationAutoFullRefreshPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._minIntervalHours = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._minIntervalHours = value.minIntervalHours;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // min_interval_hours - computed: false, optional: true, required: false
  private _minIntervalHours?: number; 
  public get minIntervalHours() {
    return this.getNumberAttribute('min_interval_hours');
  }
  public set minIntervalHours(value: number) {
    this._minIntervalHours = value;
  }
  public resetMinIntervalHours() {
    this._minIntervalHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIntervalHoursInput() {
    return this._minIntervalHours;
  }
}
export interface PipelineIngestionDefinitionObjectsTableTableConfigurationQueryBasedConnectorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#cursor_columns Pipeline#cursor_columns}
  */
  readonly cursorColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#deletion_condition Pipeline#deletion_condition}
  */
  readonly deletionCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#hard_deletion_sync_min_interval_in_seconds Pipeline#hard_deletion_sync_min_interval_in_seconds}
  */
  readonly hardDeletionSyncMinIntervalInSeconds?: number;
}

export function pipelineIngestionDefinitionObjectsTableTableConfigurationQueryBasedConnectorConfigToTerraform(struct?: PipelineIngestionDefinitionObjectsTableTableConfigurationQueryBasedConnectorConfigOutputReference | PipelineIngestionDefinitionObjectsTableTableConfigurationQueryBasedConnectorConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cursor_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cursorColumns),
    deletion_condition: cdktn.stringToTerraform(struct!.deletionCondition),
    hard_deletion_sync_min_interval_in_seconds: cdktn.numberToTerraform(struct!.hardDeletionSyncMinIntervalInSeconds),
  }
}


export function pipelineIngestionDefinitionObjectsTableTableConfigurationQueryBasedConnectorConfigToHclTerraform(struct?: PipelineIngestionDefinitionObjectsTableTableConfigurationQueryBasedConnectorConfigOutputReference | PipelineIngestionDefinitionObjectsTableTableConfigurationQueryBasedConnectorConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cursor_columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cursorColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    deletion_condition: {
      value: cdktn.stringToHclTerraform(struct!.deletionCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hard_deletion_sync_min_interval_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.hardDeletionSyncMinIntervalInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionObjectsTableTableConfigurationQueryBasedConnectorConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineIngestionDefinitionObjectsTableTableConfigurationQueryBasedConnectorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cursorColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.cursorColumns = this._cursorColumns;
    }
    if (this._deletionCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionCondition = this._deletionCondition;
    }
    if (this._hardDeletionSyncMinIntervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardDeletionSyncMinIntervalInSeconds = this._hardDeletionSyncMinIntervalInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionObjectsTableTableConfigurationQueryBasedConnectorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cursorColumns = undefined;
      this._deletionCondition = undefined;
      this._hardDeletionSyncMinIntervalInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cursorColumns = value.cursorColumns;
      this._deletionCondition = value.deletionCondition;
      this._hardDeletionSyncMinIntervalInSeconds = value.hardDeletionSyncMinIntervalInSeconds;
    }
  }

  // cursor_columns - computed: false, optional: true, required: false
  private _cursorColumns?: string[]; 
  public get cursorColumns() {
    return this.getListAttribute('cursor_columns');
  }
  public set cursorColumns(value: string[]) {
    this._cursorColumns = value;
  }
  public resetCursorColumns() {
    this._cursorColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cursorColumnsInput() {
    return this._cursorColumns;
  }

  // deletion_condition - computed: false, optional: true, required: false
  private _deletionCondition?: string; 
  public get deletionCondition() {
    return this.getStringAttribute('deletion_condition');
  }
  public set deletionCondition(value: string) {
    this._deletionCondition = value;
  }
  public resetDeletionCondition() {
    this._deletionCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionConditionInput() {
    return this._deletionCondition;
  }

  // hard_deletion_sync_min_interval_in_seconds - computed: false, optional: true, required: false
  private _hardDeletionSyncMinIntervalInSeconds?: number; 
  public get hardDeletionSyncMinIntervalInSeconds() {
    return this.getNumberAttribute('hard_deletion_sync_min_interval_in_seconds');
  }
  public set hardDeletionSyncMinIntervalInSeconds(value: number) {
    this._hardDeletionSyncMinIntervalInSeconds = value;
  }
  public resetHardDeletionSyncMinIntervalInSeconds() {
    this._hardDeletionSyncMinIntervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardDeletionSyncMinIntervalInSecondsInput() {
    return this._hardDeletionSyncMinIntervalInSeconds;
  }
}
export interface PipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersReportParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#key Pipeline#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#value Pipeline#value}
  */
  readonly value?: string;
}

export function pipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersReportParametersToTerraform(struct?: PipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersReportParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function pipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersReportParametersToHclTerraform(struct?: PipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersReportParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersReportParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersReportParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersReportParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersReportParametersList extends cdktn.ComplexList {
  public internalValue? : PipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersReportParameters[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersReportParametersOutputReference {
    return new PipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersReportParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#incremental Pipeline#incremental}
  */
  readonly incremental?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#parameters Pipeline#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * report_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#report_parameters Pipeline#report_parameters}
  */
  readonly reportParameters?: PipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersReportParameters[] | cdktn.IResolvable;
}

export function pipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersToTerraform(struct?: PipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersOutputReference | PipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    incremental: cdktn.booleanToTerraform(struct!.incremental),
    parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
    report_parameters: cdktn.listMapper(pipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersReportParametersToTerraform, true)(struct!.reportParameters),
  }
}


export function pipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersToHclTerraform(struct?: PipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersOutputReference | PipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    incremental: {
      value: cdktn.booleanToHclTerraform(struct!.incremental),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    report_parameters: {
      value: cdktn.listMapperHcl(pipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersReportParametersToHclTerraform, true)(struct!.reportParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersReportParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._incremental !== undefined) {
      hasAnyValues = true;
      internalValueResult.incremental = this._incremental;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._reportParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportParameters = this._reportParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._incremental = undefined;
      this._parameters = undefined;
      this._reportParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._incremental = value.incremental;
      this._parameters = value.parameters;
      this._reportParameters.internalValue = value.reportParameters;
    }
  }

  // incremental - computed: false, optional: true, required: false
  private _incremental?: boolean | cdktn.IResolvable; 
  public get incremental() {
    return this.getBooleanAttribute('incremental');
  }
  public set incremental(value: boolean | cdktn.IResolvable) {
    this._incremental = value;
  }
  public resetIncremental() {
    this._incremental = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalInput() {
    return this._incremental;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // report_parameters - computed: false, optional: true, required: false
  private _reportParameters = new PipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersReportParametersList(this, "report_parameters", false);
  public get reportParameters() {
    return this._reportParameters;
  }
  public putReportParameters(value: PipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersReportParameters[] | cdktn.IResolvable) {
    this._reportParameters.internalValue = value;
  }
  public resetReportParameters() {
    this._reportParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportParametersInput() {
    return this._reportParameters.internalValue;
  }
}
export interface PipelineIngestionDefinitionObjectsTableTableConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#clustering_columns Pipeline#clustering_columns}
  */
  readonly clusteringColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#enable_auto_clustering Pipeline#enable_auto_clustering}
  */
  readonly enableAutoClustering?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#exclude_columns Pipeline#exclude_columns}
  */
  readonly excludeColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#include_columns Pipeline#include_columns}
  */
  readonly includeColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#primary_keys Pipeline#primary_keys}
  */
  readonly primaryKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#row_filter Pipeline#row_filter}
  */
  readonly rowFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#salesforce_include_formula_fields Pipeline#salesforce_include_formula_fields}
  */
  readonly salesforceIncludeFormulaFields?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#scd_type Pipeline#scd_type}
  */
  readonly scdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#sequence_by Pipeline#sequence_by}
  */
  readonly sequenceBy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#source_metadata_column Pipeline#source_metadata_column}
  */
  readonly sourceMetadataColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#table_properties Pipeline#table_properties}
  */
  readonly tableProperties?: { [key: string]: string };
  /**
  * auto_full_refresh_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#auto_full_refresh_policy Pipeline#auto_full_refresh_policy}
  */
  readonly autoFullRefreshPolicy?: PipelineIngestionDefinitionObjectsTableTableConfigurationAutoFullRefreshPolicy;
  /**
  * query_based_connector_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#query_based_connector_config Pipeline#query_based_connector_config}
  */
  readonly queryBasedConnectorConfig?: PipelineIngestionDefinitionObjectsTableTableConfigurationQueryBasedConnectorConfig;
  /**
  * workday_report_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#workday_report_parameters Pipeline#workday_report_parameters}
  */
  readonly workdayReportParameters?: PipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParameters;
}

export function pipelineIngestionDefinitionObjectsTableTableConfigurationToTerraform(struct?: PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference | PipelineIngestionDefinitionObjectsTableTableConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    clustering_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.clusteringColumns),
    enable_auto_clustering: cdktn.booleanToTerraform(struct!.enableAutoClustering),
    exclude_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeColumns),
    include_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeColumns),
    primary_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.primaryKeys),
    row_filter: cdktn.stringToTerraform(struct!.rowFilter),
    salesforce_include_formula_fields: cdktn.booleanToTerraform(struct!.salesforceIncludeFormulaFields),
    scd_type: cdktn.stringToTerraform(struct!.scdType),
    sequence_by: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sequenceBy),
    source_metadata_column: cdktn.stringToTerraform(struct!.sourceMetadataColumn),
    table_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tableProperties),
    auto_full_refresh_policy: pipelineIngestionDefinitionObjectsTableTableConfigurationAutoFullRefreshPolicyToTerraform(struct!.autoFullRefreshPolicy),
    query_based_connector_config: pipelineIngestionDefinitionObjectsTableTableConfigurationQueryBasedConnectorConfigToTerraform(struct!.queryBasedConnectorConfig),
    workday_report_parameters: pipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersToTerraform(struct!.workdayReportParameters),
  }
}


export function pipelineIngestionDefinitionObjectsTableTableConfigurationToHclTerraform(struct?: PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference | PipelineIngestionDefinitionObjectsTableTableConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    clustering_columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.clusteringColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_auto_clustering: {
      value: cdktn.booleanToHclTerraform(struct!.enableAutoClustering),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    primary_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.primaryKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    row_filter: {
      value: cdktn.stringToHclTerraform(struct!.rowFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    salesforce_include_formula_fields: {
      value: cdktn.booleanToHclTerraform(struct!.salesforceIncludeFormulaFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scd_type: {
      value: cdktn.stringToHclTerraform(struct!.scdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sequence_by: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sequenceBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_metadata_column: {
      value: cdktn.stringToHclTerraform(struct!.sourceMetadataColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tableProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    auto_full_refresh_policy: {
      value: pipelineIngestionDefinitionObjectsTableTableConfigurationAutoFullRefreshPolicyToHclTerraform(struct!.autoFullRefreshPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsTableTableConfigurationAutoFullRefreshPolicyList",
    },
    query_based_connector_config: {
      value: pipelineIngestionDefinitionObjectsTableTableConfigurationQueryBasedConnectorConfigToHclTerraform(struct!.queryBasedConnectorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsTableTableConfigurationQueryBasedConnectorConfigList",
    },
    workday_report_parameters: {
      value: pipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersToHclTerraform(struct!.workdayReportParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineIngestionDefinitionObjectsTableTableConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusteringColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusteringColumns = this._clusteringColumns;
    }
    if (this._enableAutoClustering !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoClustering = this._enableAutoClustering;
    }
    if (this._excludeColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeColumns = this._excludeColumns;
    }
    if (this._includeColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeColumns = this._includeColumns;
    }
    if (this._primaryKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKeys = this._primaryKeys;
    }
    if (this._rowFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowFilter = this._rowFilter;
    }
    if (this._salesforceIncludeFormulaFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceIncludeFormulaFields = this._salesforceIncludeFormulaFields;
    }
    if (this._scdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scdType = this._scdType;
    }
    if (this._sequenceBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceBy = this._sequenceBy;
    }
    if (this._sourceMetadataColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceMetadataColumn = this._sourceMetadataColumn;
    }
    if (this._tableProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableProperties = this._tableProperties;
    }
    if (this._autoFullRefreshPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoFullRefreshPolicy = this._autoFullRefreshPolicy?.internalValue;
    }
    if (this._queryBasedConnectorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryBasedConnectorConfig = this._queryBasedConnectorConfig?.internalValue;
    }
    if (this._workdayReportParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workdayReportParameters = this._workdayReportParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionObjectsTableTableConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusteringColumns = undefined;
      this._enableAutoClustering = undefined;
      this._excludeColumns = undefined;
      this._includeColumns = undefined;
      this._primaryKeys = undefined;
      this._rowFilter = undefined;
      this._salesforceIncludeFormulaFields = undefined;
      this._scdType = undefined;
      this._sequenceBy = undefined;
      this._sourceMetadataColumn = undefined;
      this._tableProperties = undefined;
      this._autoFullRefreshPolicy.internalValue = undefined;
      this._queryBasedConnectorConfig.internalValue = undefined;
      this._workdayReportParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusteringColumns = value.clusteringColumns;
      this._enableAutoClustering = value.enableAutoClustering;
      this._excludeColumns = value.excludeColumns;
      this._includeColumns = value.includeColumns;
      this._primaryKeys = value.primaryKeys;
      this._rowFilter = value.rowFilter;
      this._salesforceIncludeFormulaFields = value.salesforceIncludeFormulaFields;
      this._scdType = value.scdType;
      this._sequenceBy = value.sequenceBy;
      this._sourceMetadataColumn = value.sourceMetadataColumn;
      this._tableProperties = value.tableProperties;
      this._autoFullRefreshPolicy.internalValue = value.autoFullRefreshPolicy;
      this._queryBasedConnectorConfig.internalValue = value.queryBasedConnectorConfig;
      this._workdayReportParameters.internalValue = value.workdayReportParameters;
    }
  }

  // clustering_columns - computed: false, optional: true, required: false
  private _clusteringColumns?: string[]; 
  public get clusteringColumns() {
    return this.getListAttribute('clustering_columns');
  }
  public set clusteringColumns(value: string[]) {
    this._clusteringColumns = value;
  }
  public resetClusteringColumns() {
    this._clusteringColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusteringColumnsInput() {
    return this._clusteringColumns;
  }

  // enable_auto_clustering - computed: false, optional: true, required: false
  private _enableAutoClustering?: boolean | cdktn.IResolvable; 
  public get enableAutoClustering() {
    return this.getBooleanAttribute('enable_auto_clustering');
  }
  public set enableAutoClustering(value: boolean | cdktn.IResolvable) {
    this._enableAutoClustering = value;
  }
  public resetEnableAutoClustering() {
    this._enableAutoClustering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoClusteringInput() {
    return this._enableAutoClustering;
  }

  // exclude_columns - computed: false, optional: true, required: false
  private _excludeColumns?: string[]; 
  public get excludeColumns() {
    return this.getListAttribute('exclude_columns');
  }
  public set excludeColumns(value: string[]) {
    this._excludeColumns = value;
  }
  public resetExcludeColumns() {
    this._excludeColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeColumnsInput() {
    return this._excludeColumns;
  }

  // include_columns - computed: false, optional: true, required: false
  private _includeColumns?: string[]; 
  public get includeColumns() {
    return this.getListAttribute('include_columns');
  }
  public set includeColumns(value: string[]) {
    this._includeColumns = value;
  }
  public resetIncludeColumns() {
    this._includeColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeColumnsInput() {
    return this._includeColumns;
  }

  // primary_keys - computed: false, optional: true, required: false
  private _primaryKeys?: string[]; 
  public get primaryKeys() {
    return this.getListAttribute('primary_keys');
  }
  public set primaryKeys(value: string[]) {
    this._primaryKeys = value;
  }
  public resetPrimaryKeys() {
    this._primaryKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeysInput() {
    return this._primaryKeys;
  }

  // row_filter - computed: false, optional: true, required: false
  private _rowFilter?: string; 
  public get rowFilter() {
    return this.getStringAttribute('row_filter');
  }
  public set rowFilter(value: string) {
    this._rowFilter = value;
  }
  public resetRowFilter() {
    this._rowFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowFilterInput() {
    return this._rowFilter;
  }

  // salesforce_include_formula_fields - computed: false, optional: true, required: false
  private _salesforceIncludeFormulaFields?: boolean | cdktn.IResolvable; 
  public get salesforceIncludeFormulaFields() {
    return this.getBooleanAttribute('salesforce_include_formula_fields');
  }
  public set salesforceIncludeFormulaFields(value: boolean | cdktn.IResolvable) {
    this._salesforceIncludeFormulaFields = value;
  }
  public resetSalesforceIncludeFormulaFields() {
    this._salesforceIncludeFormulaFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceIncludeFormulaFieldsInput() {
    return this._salesforceIncludeFormulaFields;
  }

  // scd_type - computed: false, optional: true, required: false
  private _scdType?: string; 
  public get scdType() {
    return this.getStringAttribute('scd_type');
  }
  public set scdType(value: string) {
    this._scdType = value;
  }
  public resetScdType() {
    this._scdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scdTypeInput() {
    return this._scdType;
  }

  // sequence_by - computed: false, optional: true, required: false
  private _sequenceBy?: string[]; 
  public get sequenceBy() {
    return this.getListAttribute('sequence_by');
  }
  public set sequenceBy(value: string[]) {
    this._sequenceBy = value;
  }
  public resetSequenceBy() {
    this._sequenceBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceByInput() {
    return this._sequenceBy;
  }

  // source_metadata_column - computed: false, optional: true, required: false
  private _sourceMetadataColumn?: string; 
  public get sourceMetadataColumn() {
    return this.getStringAttribute('source_metadata_column');
  }
  public set sourceMetadataColumn(value: string) {
    this._sourceMetadataColumn = value;
  }
  public resetSourceMetadataColumn() {
    this._sourceMetadataColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMetadataColumnInput() {
    return this._sourceMetadataColumn;
  }

  // table_properties - computed: false, optional: true, required: false
  private _tableProperties?: { [key: string]: string }; 
  public get tableProperties() {
    return this.getStringMapAttribute('table_properties');
  }
  public set tableProperties(value: { [key: string]: string }) {
    this._tableProperties = value;
  }
  public resetTableProperties() {
    this._tableProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablePropertiesInput() {
    return this._tableProperties;
  }

  // auto_full_refresh_policy - computed: false, optional: true, required: false
  private _autoFullRefreshPolicy = new PipelineIngestionDefinitionObjectsTableTableConfigurationAutoFullRefreshPolicyOutputReference(this, "auto_full_refresh_policy");
  public get autoFullRefreshPolicy() {
    return this._autoFullRefreshPolicy;
  }
  public putAutoFullRefreshPolicy(value: PipelineIngestionDefinitionObjectsTableTableConfigurationAutoFullRefreshPolicy) {
    this._autoFullRefreshPolicy.internalValue = value;
  }
  public resetAutoFullRefreshPolicy() {
    this._autoFullRefreshPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFullRefreshPolicyInput() {
    return this._autoFullRefreshPolicy.internalValue;
  }

  // query_based_connector_config - computed: false, optional: true, required: false
  private _queryBasedConnectorConfig = new PipelineIngestionDefinitionObjectsTableTableConfigurationQueryBasedConnectorConfigOutputReference(this, "query_based_connector_config");
  public get queryBasedConnectorConfig() {
    return this._queryBasedConnectorConfig;
  }
  public putQueryBasedConnectorConfig(value: PipelineIngestionDefinitionObjectsTableTableConfigurationQueryBasedConnectorConfig) {
    this._queryBasedConnectorConfig.internalValue = value;
  }
  public resetQueryBasedConnectorConfig() {
    this._queryBasedConnectorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryBasedConnectorConfigInput() {
    return this._queryBasedConnectorConfig.internalValue;
  }

  // workday_report_parameters - computed: false, optional: true, required: false
  private _workdayReportParameters = new PipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParametersOutputReference(this, "workday_report_parameters");
  public get workdayReportParameters() {
    return this._workdayReportParameters;
  }
  public putWorkdayReportParameters(value: PipelineIngestionDefinitionObjectsTableTableConfigurationWorkdayReportParameters) {
    this._workdayReportParameters.internalValue = value;
  }
  public resetWorkdayReportParameters() {
    this._workdayReportParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workdayReportParametersInput() {
    return this._workdayReportParameters.internalValue;
  }
}
export interface PipelineIngestionDefinitionObjectsTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#destination_catalog Pipeline#destination_catalog}
  */
  readonly destinationCatalog: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#destination_schema Pipeline#destination_schema}
  */
  readonly destinationSchema: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#destination_table Pipeline#destination_table}
  */
  readonly destinationTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#source_catalog Pipeline#source_catalog}
  */
  readonly sourceCatalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#source_schema Pipeline#source_schema}
  */
  readonly sourceSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#source_table Pipeline#source_table}
  */
  readonly sourceTable?: string;
  /**
  * connector_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#connector_options Pipeline#connector_options}
  */
  readonly connectorOptions?: PipelineIngestionDefinitionObjectsTableConnectorOptions;
  /**
  * table_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#table_configuration Pipeline#table_configuration}
  */
  readonly tableConfiguration?: PipelineIngestionDefinitionObjectsTableTableConfiguration;
}

export function pipelineIngestionDefinitionObjectsTableToTerraform(struct?: PipelineIngestionDefinitionObjectsTableOutputReference | PipelineIngestionDefinitionObjectsTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_catalog: cdktn.stringToTerraform(struct!.destinationCatalog),
    destination_schema: cdktn.stringToTerraform(struct!.destinationSchema),
    destination_table: cdktn.stringToTerraform(struct!.destinationTable),
    source_catalog: cdktn.stringToTerraform(struct!.sourceCatalog),
    source_schema: cdktn.stringToTerraform(struct!.sourceSchema),
    source_table: cdktn.stringToTerraform(struct!.sourceTable),
    connector_options: pipelineIngestionDefinitionObjectsTableConnectorOptionsToTerraform(struct!.connectorOptions),
    table_configuration: pipelineIngestionDefinitionObjectsTableTableConfigurationToTerraform(struct!.tableConfiguration),
  }
}


export function pipelineIngestionDefinitionObjectsTableToHclTerraform(struct?: PipelineIngestionDefinitionObjectsTableOutputReference | PipelineIngestionDefinitionObjectsTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_catalog: {
      value: cdktn.stringToHclTerraform(struct!.destinationCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_schema: {
      value: cdktn.stringToHclTerraform(struct!.destinationSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_table: {
      value: cdktn.stringToHclTerraform(struct!.destinationTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_catalog: {
      value: cdktn.stringToHclTerraform(struct!.sourceCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_schema: {
      value: cdktn.stringToHclTerraform(struct!.sourceSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_table: {
      value: cdktn.stringToHclTerraform(struct!.sourceTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_options: {
      value: pipelineIngestionDefinitionObjectsTableConnectorOptionsToHclTerraform(struct!.connectorOptions),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsTableConnectorOptionsList",
    },
    table_configuration: {
      value: pipelineIngestionDefinitionObjectsTableTableConfigurationToHclTerraform(struct!.tableConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsTableTableConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionObjectsTableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineIngestionDefinitionObjectsTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationCatalog = this._destinationCatalog;
    }
    if (this._destinationSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationSchema = this._destinationSchema;
    }
    if (this._destinationTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationTable = this._destinationTable;
    }
    if (this._sourceCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCatalog = this._sourceCatalog;
    }
    if (this._sourceSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSchema = this._sourceSchema;
    }
    if (this._sourceTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTable = this._sourceTable;
    }
    if (this._connectorOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorOptions = this._connectorOptions?.internalValue;
    }
    if (this._tableConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableConfiguration = this._tableConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionObjectsTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationCatalog = undefined;
      this._destinationSchema = undefined;
      this._destinationTable = undefined;
      this._sourceCatalog = undefined;
      this._sourceSchema = undefined;
      this._sourceTable = undefined;
      this._connectorOptions.internalValue = undefined;
      this._tableConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationCatalog = value.destinationCatalog;
      this._destinationSchema = value.destinationSchema;
      this._destinationTable = value.destinationTable;
      this._sourceCatalog = value.sourceCatalog;
      this._sourceSchema = value.sourceSchema;
      this._sourceTable = value.sourceTable;
      this._connectorOptions.internalValue = value.connectorOptions;
      this._tableConfiguration.internalValue = value.tableConfiguration;
    }
  }

  // destination_catalog - computed: false, optional: false, required: true
  private _destinationCatalog?: string; 
  public get destinationCatalog() {
    return this.getStringAttribute('destination_catalog');
  }
  public set destinationCatalog(value: string) {
    this._destinationCatalog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCatalogInput() {
    return this._destinationCatalog;
  }

  // destination_schema - computed: false, optional: false, required: true
  private _destinationSchema?: string; 
  public get destinationSchema() {
    return this.getStringAttribute('destination_schema');
  }
  public set destinationSchema(value: string) {
    this._destinationSchema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationSchemaInput() {
    return this._destinationSchema;
  }

  // destination_table - computed: false, optional: true, required: false
  private _destinationTable?: string; 
  public get destinationTable() {
    return this.getStringAttribute('destination_table');
  }
  public set destinationTable(value: string) {
    this._destinationTable = value;
  }
  public resetDestinationTable() {
    this._destinationTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTableInput() {
    return this._destinationTable;
  }

  // source_catalog - computed: false, optional: true, required: false
  private _sourceCatalog?: string; 
  public get sourceCatalog() {
    return this.getStringAttribute('source_catalog');
  }
  public set sourceCatalog(value: string) {
    this._sourceCatalog = value;
  }
  public resetSourceCatalog() {
    this._sourceCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCatalogInput() {
    return this._sourceCatalog;
  }

  // source_schema - computed: false, optional: true, required: false
  private _sourceSchema?: string; 
  public get sourceSchema() {
    return this.getStringAttribute('source_schema');
  }
  public set sourceSchema(value: string) {
    this._sourceSchema = value;
  }
  public resetSourceSchema() {
    this._sourceSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSchemaInput() {
    return this._sourceSchema;
  }

  // source_table - computed: false, optional: true, required: false
  private _sourceTable?: string; 
  public get sourceTable() {
    return this.getStringAttribute('source_table');
  }
  public set sourceTable(value: string) {
    this._sourceTable = value;
  }
  public resetSourceTable() {
    this._sourceTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTableInput() {
    return this._sourceTable;
  }

  // connector_options - computed: false, optional: true, required: false
  private _connectorOptions = new PipelineIngestionDefinitionObjectsTableConnectorOptionsOutputReference(this, "connector_options");
  public get connectorOptions() {
    return this._connectorOptions;
  }
  public putConnectorOptions(value: PipelineIngestionDefinitionObjectsTableConnectorOptions) {
    this._connectorOptions.internalValue = value;
  }
  public resetConnectorOptions() {
    this._connectorOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorOptionsInput() {
    return this._connectorOptions.internalValue;
  }

  // table_configuration - computed: false, optional: true, required: false
  private _tableConfiguration = new PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference(this, "table_configuration");
  public get tableConfiguration() {
    return this._tableConfiguration;
  }
  public putTableConfiguration(value: PipelineIngestionDefinitionObjectsTableTableConfiguration) {
    this._tableConfiguration.internalValue = value;
  }
  public resetTableConfiguration() {
    this._tableConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableConfigurationInput() {
    return this._tableConfiguration.internalValue;
  }
}
export interface PipelineIngestionDefinitionObjects {
  /**
  * report block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#report Pipeline#report}
  */
  readonly report?: PipelineIngestionDefinitionObjectsReport;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#schema Pipeline#schema}
  */
  readonly schema?: PipelineIngestionDefinitionObjectsSchema;
  /**
  * table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#table Pipeline#table}
  */
  readonly table?: PipelineIngestionDefinitionObjectsTable;
}

export function pipelineIngestionDefinitionObjectsToTerraform(struct?: PipelineIngestionDefinitionObjects | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    report: pipelineIngestionDefinitionObjectsReportToTerraform(struct!.report),
    schema: pipelineIngestionDefinitionObjectsSchemaToTerraform(struct!.schema),
    table: pipelineIngestionDefinitionObjectsTableToTerraform(struct!.table),
  }
}


export function pipelineIngestionDefinitionObjectsToHclTerraform(struct?: PipelineIngestionDefinitionObjects | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    report: {
      value: pipelineIngestionDefinitionObjectsReportToHclTerraform(struct!.report),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsReportList",
    },
    schema: {
      value: pipelineIngestionDefinitionObjectsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsSchemaList",
    },
    table: {
      value: pipelineIngestionDefinitionObjectsTableToHclTerraform(struct!.table),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsTableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PipelineIngestionDefinitionObjects | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._report?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.report = this._report?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    if (this._table?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionObjects | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._report.internalValue = undefined;
      this._schema.internalValue = undefined;
      this._table.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._report.internalValue = value.report;
      this._schema.internalValue = value.schema;
      this._table.internalValue = value.table;
    }
  }

  // report - computed: false, optional: true, required: false
  private _report = new PipelineIngestionDefinitionObjectsReportOutputReference(this, "report");
  public get report() {
    return this._report;
  }
  public putReport(value: PipelineIngestionDefinitionObjectsReport) {
    this._report.internalValue = value;
  }
  public resetReport() {
    this._report.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportInput() {
    return this._report.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new PipelineIngestionDefinitionObjectsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: PipelineIngestionDefinitionObjectsSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // table - computed: false, optional: true, required: false
  private _table = new PipelineIngestionDefinitionObjectsTableOutputReference(this, "table");
  public get table() {
    return this._table;
  }
  public putTable(value: PipelineIngestionDefinitionObjectsTable) {
    this._table.internalValue = value;
  }
  public resetTable() {
    this._table.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table.internalValue;
  }
}

export class PipelineIngestionDefinitionObjectsList extends cdktn.ComplexList {
  public internalValue? : PipelineIngestionDefinitionObjects[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PipelineIngestionDefinitionObjectsOutputReference {
    return new PipelineIngestionDefinitionObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineIngestionDefinitionSourceConfigurationsApiSourceConnectorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#configs Pipeline#configs}
  */
  readonly configs?: { [key: string]: string };
}

export function pipelineIngestionDefinitionSourceConfigurationsApiSourceConnectorConfigToTerraform(struct?: PipelineIngestionDefinitionSourceConfigurationsApiSourceConnectorConfigOutputReference | PipelineIngestionDefinitionSourceConfigurationsApiSourceConnectorConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    configs: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.configs),
  }
}


export function pipelineIngestionDefinitionSourceConfigurationsApiSourceConnectorConfigToHclTerraform(struct?: PipelineIngestionDefinitionSourceConfigurationsApiSourceConnectorConfigOutputReference | PipelineIngestionDefinitionSourceConfigurationsApiSourceConnectorConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    configs: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.configs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionSourceConfigurationsApiSourceConnectorConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineIngestionDefinitionSourceConfigurationsApiSourceConnectorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configs !== undefined) {
      hasAnyValues = true;
      internalValueResult.configs = this._configs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionSourceConfigurationsApiSourceConnectorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configs = value.configs;
    }
  }

  // configs - computed: false, optional: true, required: false
  private _configs?: { [key: string]: string }; 
  public get configs() {
    return this.getStringMapAttribute('configs');
  }
  public set configs(value: { [key: string]: string }) {
    this._configs = value;
  }
  public resetConfigs() {
    this._configs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configsInput() {
    return this._configs;
  }
}
export interface PipelineIngestionDefinitionSourceConfigurationsCatalogPostgresSlotConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#publication_name Pipeline#publication_name}
  */
  readonly publicationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#slot_name Pipeline#slot_name}
  */
  readonly slotName?: string;
}

export function pipelineIngestionDefinitionSourceConfigurationsCatalogPostgresSlotConfigToTerraform(struct?: PipelineIngestionDefinitionSourceConfigurationsCatalogPostgresSlotConfigOutputReference | PipelineIngestionDefinitionSourceConfigurationsCatalogPostgresSlotConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    publication_name: cdktn.stringToTerraform(struct!.publicationName),
    slot_name: cdktn.stringToTerraform(struct!.slotName),
  }
}


export function pipelineIngestionDefinitionSourceConfigurationsCatalogPostgresSlotConfigToHclTerraform(struct?: PipelineIngestionDefinitionSourceConfigurationsCatalogPostgresSlotConfigOutputReference | PipelineIngestionDefinitionSourceConfigurationsCatalogPostgresSlotConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    publication_name: {
      value: cdktn.stringToHclTerraform(struct!.publicationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slot_name: {
      value: cdktn.stringToHclTerraform(struct!.slotName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionSourceConfigurationsCatalogPostgresSlotConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineIngestionDefinitionSourceConfigurationsCatalogPostgresSlotConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicationName = this._publicationName;
    }
    if (this._slotName !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotName = this._slotName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionSourceConfigurationsCatalogPostgresSlotConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicationName = undefined;
      this._slotName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicationName = value.publicationName;
      this._slotName = value.slotName;
    }
  }

  // publication_name - computed: false, optional: true, required: false
  private _publicationName?: string; 
  public get publicationName() {
    return this.getStringAttribute('publication_name');
  }
  public set publicationName(value: string) {
    this._publicationName = value;
  }
  public resetPublicationName() {
    this._publicationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicationNameInput() {
    return this._publicationName;
  }

  // slot_name - computed: false, optional: true, required: false
  private _slotName?: string; 
  public get slotName() {
    return this.getStringAttribute('slot_name');
  }
  public set slotName(value: string) {
    this._slotName = value;
  }
  public resetSlotName() {
    this._slotName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotNameInput() {
    return this._slotName;
  }
}
export interface PipelineIngestionDefinitionSourceConfigurationsCatalogPostgres {
  /**
  * slot_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#slot_config Pipeline#slot_config}
  */
  readonly slotConfig?: PipelineIngestionDefinitionSourceConfigurationsCatalogPostgresSlotConfig;
}

export function pipelineIngestionDefinitionSourceConfigurationsCatalogPostgresToTerraform(struct?: PipelineIngestionDefinitionSourceConfigurationsCatalogPostgresOutputReference | PipelineIngestionDefinitionSourceConfigurationsCatalogPostgres): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    slot_config: pipelineIngestionDefinitionSourceConfigurationsCatalogPostgresSlotConfigToTerraform(struct!.slotConfig),
  }
}


export function pipelineIngestionDefinitionSourceConfigurationsCatalogPostgresToHclTerraform(struct?: PipelineIngestionDefinitionSourceConfigurationsCatalogPostgresOutputReference | PipelineIngestionDefinitionSourceConfigurationsCatalogPostgres): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    slot_config: {
      value: pipelineIngestionDefinitionSourceConfigurationsCatalogPostgresSlotConfigToHclTerraform(struct!.slotConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionSourceConfigurationsCatalogPostgresSlotConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionSourceConfigurationsCatalogPostgresOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineIngestionDefinitionSourceConfigurationsCatalogPostgres | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slotConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotConfig = this._slotConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionSourceConfigurationsCatalogPostgres | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._slotConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._slotConfig.internalValue = value.slotConfig;
    }
  }

  // slot_config - computed: false, optional: true, required: false
  private _slotConfig = new PipelineIngestionDefinitionSourceConfigurationsCatalogPostgresSlotConfigOutputReference(this, "slot_config");
  public get slotConfig() {
    return this._slotConfig;
  }
  public putSlotConfig(value: PipelineIngestionDefinitionSourceConfigurationsCatalogPostgresSlotConfig) {
    this._slotConfig.internalValue = value;
  }
  public resetSlotConfig() {
    this._slotConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotConfigInput() {
    return this._slotConfig.internalValue;
  }
}
export interface PipelineIngestionDefinitionSourceConfigurationsCatalog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#source_catalog Pipeline#source_catalog}
  */
  readonly sourceCatalog?: string;
  /**
  * postgres block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#postgres Pipeline#postgres}
  */
  readonly postgres?: PipelineIngestionDefinitionSourceConfigurationsCatalogPostgres;
}

export function pipelineIngestionDefinitionSourceConfigurationsCatalogToTerraform(struct?: PipelineIngestionDefinitionSourceConfigurationsCatalogOutputReference | PipelineIngestionDefinitionSourceConfigurationsCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_catalog: cdktn.stringToTerraform(struct!.sourceCatalog),
    postgres: pipelineIngestionDefinitionSourceConfigurationsCatalogPostgresToTerraform(struct!.postgres),
  }
}


export function pipelineIngestionDefinitionSourceConfigurationsCatalogToHclTerraform(struct?: PipelineIngestionDefinitionSourceConfigurationsCatalogOutputReference | PipelineIngestionDefinitionSourceConfigurationsCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_catalog: {
      value: cdktn.stringToHclTerraform(struct!.sourceCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postgres: {
      value: pipelineIngestionDefinitionSourceConfigurationsCatalogPostgresToHclTerraform(struct!.postgres),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionSourceConfigurationsCatalogPostgresList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionSourceConfigurationsCatalogOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineIngestionDefinitionSourceConfigurationsCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCatalog = this._sourceCatalog;
    }
    if (this._postgres?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgres = this._postgres?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionSourceConfigurationsCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceCatalog = undefined;
      this._postgres.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceCatalog = value.sourceCatalog;
      this._postgres.internalValue = value.postgres;
    }
  }

  // source_catalog - computed: false, optional: true, required: false
  private _sourceCatalog?: string; 
  public get sourceCatalog() {
    return this.getStringAttribute('source_catalog');
  }
  public set sourceCatalog(value: string) {
    this._sourceCatalog = value;
  }
  public resetSourceCatalog() {
    this._sourceCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCatalogInput() {
    return this._sourceCatalog;
  }

  // postgres - computed: false, optional: true, required: false
  private _postgres = new PipelineIngestionDefinitionSourceConfigurationsCatalogPostgresOutputReference(this, "postgres");
  public get postgres() {
    return this._postgres;
  }
  public putPostgres(value: PipelineIngestionDefinitionSourceConfigurationsCatalogPostgres) {
    this._postgres.internalValue = value;
  }
  public resetPostgres() {
    this._postgres.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresInput() {
    return this._postgres.internalValue;
  }
}
export interface PipelineIngestionDefinitionSourceConfigurationsGoogleAdsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#manager_account_id Pipeline#manager_account_id}
  */
  readonly managerAccountId?: string;
}

export function pipelineIngestionDefinitionSourceConfigurationsGoogleAdsConfigToTerraform(struct?: PipelineIngestionDefinitionSourceConfigurationsGoogleAdsConfigOutputReference | PipelineIngestionDefinitionSourceConfigurationsGoogleAdsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    manager_account_id: cdktn.stringToTerraform(struct!.managerAccountId),
  }
}


export function pipelineIngestionDefinitionSourceConfigurationsGoogleAdsConfigToHclTerraform(struct?: PipelineIngestionDefinitionSourceConfigurationsGoogleAdsConfigOutputReference | PipelineIngestionDefinitionSourceConfigurationsGoogleAdsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    manager_account_id: {
      value: cdktn.stringToHclTerraform(struct!.managerAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionSourceConfigurationsGoogleAdsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineIngestionDefinitionSourceConfigurationsGoogleAdsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managerAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managerAccountId = this._managerAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionSourceConfigurationsGoogleAdsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managerAccountId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managerAccountId = value.managerAccountId;
    }
  }

  // manager_account_id - computed: false, optional: true, required: false
  private _managerAccountId?: string; 
  public get managerAccountId() {
    return this.getStringAttribute('manager_account_id');
  }
  public set managerAccountId(value: string) {
    this._managerAccountId = value;
  }
  public resetManagerAccountId() {
    this._managerAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerAccountIdInput() {
    return this._managerAccountId;
  }
}
export interface PipelineIngestionDefinitionSourceConfigurations {
  /**
  * api_source_connector_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#api_source_connector_config Pipeline#api_source_connector_config}
  */
  readonly apiSourceConnectorConfig?: PipelineIngestionDefinitionSourceConfigurationsApiSourceConnectorConfig;
  /**
  * catalog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#catalog Pipeline#catalog}
  */
  readonly catalog?: PipelineIngestionDefinitionSourceConfigurationsCatalog;
  /**
  * google_ads_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#google_ads_config Pipeline#google_ads_config}
  */
  readonly googleAdsConfig?: PipelineIngestionDefinitionSourceConfigurationsGoogleAdsConfig;
}

export function pipelineIngestionDefinitionSourceConfigurationsToTerraform(struct?: PipelineIngestionDefinitionSourceConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_source_connector_config: pipelineIngestionDefinitionSourceConfigurationsApiSourceConnectorConfigToTerraform(struct!.apiSourceConnectorConfig),
    catalog: pipelineIngestionDefinitionSourceConfigurationsCatalogToTerraform(struct!.catalog),
    google_ads_config: pipelineIngestionDefinitionSourceConfigurationsGoogleAdsConfigToTerraform(struct!.googleAdsConfig),
  }
}


export function pipelineIngestionDefinitionSourceConfigurationsToHclTerraform(struct?: PipelineIngestionDefinitionSourceConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_source_connector_config: {
      value: pipelineIngestionDefinitionSourceConfigurationsApiSourceConnectorConfigToHclTerraform(struct!.apiSourceConnectorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionSourceConfigurationsApiSourceConnectorConfigList",
    },
    catalog: {
      value: pipelineIngestionDefinitionSourceConfigurationsCatalogToHclTerraform(struct!.catalog),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionSourceConfigurationsCatalogList",
    },
    google_ads_config: {
      value: pipelineIngestionDefinitionSourceConfigurationsGoogleAdsConfigToHclTerraform(struct!.googleAdsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionSourceConfigurationsGoogleAdsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionSourceConfigurationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PipelineIngestionDefinitionSourceConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiSourceConnectorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSourceConnectorConfig = this._apiSourceConnectorConfig?.internalValue;
    }
    if (this._catalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog?.internalValue;
    }
    if (this._googleAdsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleAdsConfig = this._googleAdsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionSourceConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiSourceConnectorConfig.internalValue = undefined;
      this._catalog.internalValue = undefined;
      this._googleAdsConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiSourceConnectorConfig.internalValue = value.apiSourceConnectorConfig;
      this._catalog.internalValue = value.catalog;
      this._googleAdsConfig.internalValue = value.googleAdsConfig;
    }
  }

  // api_source_connector_config - computed: false, optional: true, required: false
  private _apiSourceConnectorConfig = new PipelineIngestionDefinitionSourceConfigurationsApiSourceConnectorConfigOutputReference(this, "api_source_connector_config");
  public get apiSourceConnectorConfig() {
    return this._apiSourceConnectorConfig;
  }
  public putApiSourceConnectorConfig(value: PipelineIngestionDefinitionSourceConfigurationsApiSourceConnectorConfig) {
    this._apiSourceConnectorConfig.internalValue = value;
  }
  public resetApiSourceConnectorConfig() {
    this._apiSourceConnectorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSourceConnectorConfigInput() {
    return this._apiSourceConnectorConfig.internalValue;
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog = new PipelineIngestionDefinitionSourceConfigurationsCatalogOutputReference(this, "catalog");
  public get catalog() {
    return this._catalog;
  }
  public putCatalog(value: PipelineIngestionDefinitionSourceConfigurationsCatalog) {
    this._catalog.internalValue = value;
  }
  public resetCatalog() {
    this._catalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog.internalValue;
  }

  // google_ads_config - computed: false, optional: true, required: false
  private _googleAdsConfig = new PipelineIngestionDefinitionSourceConfigurationsGoogleAdsConfigOutputReference(this, "google_ads_config");
  public get googleAdsConfig() {
    return this._googleAdsConfig;
  }
  public putGoogleAdsConfig(value: PipelineIngestionDefinitionSourceConfigurationsGoogleAdsConfig) {
    this._googleAdsConfig.internalValue = value;
  }
  public resetGoogleAdsConfig() {
    this._googleAdsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleAdsConfigInput() {
    return this._googleAdsConfig.internalValue;
  }
}

export class PipelineIngestionDefinitionSourceConfigurationsList extends cdktn.ComplexList {
  public internalValue? : PipelineIngestionDefinitionSourceConfigurations[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PipelineIngestionDefinitionSourceConfigurationsOutputReference {
    return new PipelineIngestionDefinitionSourceConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineIngestionDefinitionTableConfigurationAutoFullRefreshPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#enabled Pipeline#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#min_interval_hours Pipeline#min_interval_hours}
  */
  readonly minIntervalHours?: number;
}

export function pipelineIngestionDefinitionTableConfigurationAutoFullRefreshPolicyToTerraform(struct?: PipelineIngestionDefinitionTableConfigurationAutoFullRefreshPolicyOutputReference | PipelineIngestionDefinitionTableConfigurationAutoFullRefreshPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    min_interval_hours: cdktn.numberToTerraform(struct!.minIntervalHours),
  }
}


export function pipelineIngestionDefinitionTableConfigurationAutoFullRefreshPolicyToHclTerraform(struct?: PipelineIngestionDefinitionTableConfigurationAutoFullRefreshPolicyOutputReference | PipelineIngestionDefinitionTableConfigurationAutoFullRefreshPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_interval_hours: {
      value: cdktn.numberToHclTerraform(struct!.minIntervalHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionTableConfigurationAutoFullRefreshPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineIngestionDefinitionTableConfigurationAutoFullRefreshPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._minIntervalHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.minIntervalHours = this._minIntervalHours;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionTableConfigurationAutoFullRefreshPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._minIntervalHours = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._minIntervalHours = value.minIntervalHours;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // min_interval_hours - computed: false, optional: true, required: false
  private _minIntervalHours?: number; 
  public get minIntervalHours() {
    return this.getNumberAttribute('min_interval_hours');
  }
  public set minIntervalHours(value: number) {
    this._minIntervalHours = value;
  }
  public resetMinIntervalHours() {
    this._minIntervalHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIntervalHoursInput() {
    return this._minIntervalHours;
  }
}
export interface PipelineIngestionDefinitionTableConfigurationQueryBasedConnectorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#cursor_columns Pipeline#cursor_columns}
  */
  readonly cursorColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#deletion_condition Pipeline#deletion_condition}
  */
  readonly deletionCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#hard_deletion_sync_min_interval_in_seconds Pipeline#hard_deletion_sync_min_interval_in_seconds}
  */
  readonly hardDeletionSyncMinIntervalInSeconds?: number;
}

export function pipelineIngestionDefinitionTableConfigurationQueryBasedConnectorConfigToTerraform(struct?: PipelineIngestionDefinitionTableConfigurationQueryBasedConnectorConfigOutputReference | PipelineIngestionDefinitionTableConfigurationQueryBasedConnectorConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cursor_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cursorColumns),
    deletion_condition: cdktn.stringToTerraform(struct!.deletionCondition),
    hard_deletion_sync_min_interval_in_seconds: cdktn.numberToTerraform(struct!.hardDeletionSyncMinIntervalInSeconds),
  }
}


export function pipelineIngestionDefinitionTableConfigurationQueryBasedConnectorConfigToHclTerraform(struct?: PipelineIngestionDefinitionTableConfigurationQueryBasedConnectorConfigOutputReference | PipelineIngestionDefinitionTableConfigurationQueryBasedConnectorConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cursor_columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cursorColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    deletion_condition: {
      value: cdktn.stringToHclTerraform(struct!.deletionCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hard_deletion_sync_min_interval_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.hardDeletionSyncMinIntervalInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionTableConfigurationQueryBasedConnectorConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineIngestionDefinitionTableConfigurationQueryBasedConnectorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cursorColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.cursorColumns = this._cursorColumns;
    }
    if (this._deletionCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionCondition = this._deletionCondition;
    }
    if (this._hardDeletionSyncMinIntervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardDeletionSyncMinIntervalInSeconds = this._hardDeletionSyncMinIntervalInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionTableConfigurationQueryBasedConnectorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cursorColumns = undefined;
      this._deletionCondition = undefined;
      this._hardDeletionSyncMinIntervalInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cursorColumns = value.cursorColumns;
      this._deletionCondition = value.deletionCondition;
      this._hardDeletionSyncMinIntervalInSeconds = value.hardDeletionSyncMinIntervalInSeconds;
    }
  }

  // cursor_columns - computed: false, optional: true, required: false
  private _cursorColumns?: string[]; 
  public get cursorColumns() {
    return this.getListAttribute('cursor_columns');
  }
  public set cursorColumns(value: string[]) {
    this._cursorColumns = value;
  }
  public resetCursorColumns() {
    this._cursorColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cursorColumnsInput() {
    return this._cursorColumns;
  }

  // deletion_condition - computed: false, optional: true, required: false
  private _deletionCondition?: string; 
  public get deletionCondition() {
    return this.getStringAttribute('deletion_condition');
  }
  public set deletionCondition(value: string) {
    this._deletionCondition = value;
  }
  public resetDeletionCondition() {
    this._deletionCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionConditionInput() {
    return this._deletionCondition;
  }

  // hard_deletion_sync_min_interval_in_seconds - computed: false, optional: true, required: false
  private _hardDeletionSyncMinIntervalInSeconds?: number; 
  public get hardDeletionSyncMinIntervalInSeconds() {
    return this.getNumberAttribute('hard_deletion_sync_min_interval_in_seconds');
  }
  public set hardDeletionSyncMinIntervalInSeconds(value: number) {
    this._hardDeletionSyncMinIntervalInSeconds = value;
  }
  public resetHardDeletionSyncMinIntervalInSeconds() {
    this._hardDeletionSyncMinIntervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardDeletionSyncMinIntervalInSecondsInput() {
    return this._hardDeletionSyncMinIntervalInSeconds;
  }
}
export interface PipelineIngestionDefinitionTableConfigurationWorkdayReportParametersReportParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#key Pipeline#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#value Pipeline#value}
  */
  readonly value?: string;
}

export function pipelineIngestionDefinitionTableConfigurationWorkdayReportParametersReportParametersToTerraform(struct?: PipelineIngestionDefinitionTableConfigurationWorkdayReportParametersReportParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function pipelineIngestionDefinitionTableConfigurationWorkdayReportParametersReportParametersToHclTerraform(struct?: PipelineIngestionDefinitionTableConfigurationWorkdayReportParametersReportParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionTableConfigurationWorkdayReportParametersReportParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PipelineIngestionDefinitionTableConfigurationWorkdayReportParametersReportParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionTableConfigurationWorkdayReportParametersReportParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PipelineIngestionDefinitionTableConfigurationWorkdayReportParametersReportParametersList extends cdktn.ComplexList {
  public internalValue? : PipelineIngestionDefinitionTableConfigurationWorkdayReportParametersReportParameters[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PipelineIngestionDefinitionTableConfigurationWorkdayReportParametersReportParametersOutputReference {
    return new PipelineIngestionDefinitionTableConfigurationWorkdayReportParametersReportParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineIngestionDefinitionTableConfigurationWorkdayReportParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#incremental Pipeline#incremental}
  */
  readonly incremental?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#parameters Pipeline#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * report_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#report_parameters Pipeline#report_parameters}
  */
  readonly reportParameters?: PipelineIngestionDefinitionTableConfigurationWorkdayReportParametersReportParameters[] | cdktn.IResolvable;
}

export function pipelineIngestionDefinitionTableConfigurationWorkdayReportParametersToTerraform(struct?: PipelineIngestionDefinitionTableConfigurationWorkdayReportParametersOutputReference | PipelineIngestionDefinitionTableConfigurationWorkdayReportParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    incremental: cdktn.booleanToTerraform(struct!.incremental),
    parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
    report_parameters: cdktn.listMapper(pipelineIngestionDefinitionTableConfigurationWorkdayReportParametersReportParametersToTerraform, true)(struct!.reportParameters),
  }
}


export function pipelineIngestionDefinitionTableConfigurationWorkdayReportParametersToHclTerraform(struct?: PipelineIngestionDefinitionTableConfigurationWorkdayReportParametersOutputReference | PipelineIngestionDefinitionTableConfigurationWorkdayReportParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    incremental: {
      value: cdktn.booleanToHclTerraform(struct!.incremental),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    report_parameters: {
      value: cdktn.listMapperHcl(pipelineIngestionDefinitionTableConfigurationWorkdayReportParametersReportParametersToHclTerraform, true)(struct!.reportParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionTableConfigurationWorkdayReportParametersReportParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionTableConfigurationWorkdayReportParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineIngestionDefinitionTableConfigurationWorkdayReportParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._incremental !== undefined) {
      hasAnyValues = true;
      internalValueResult.incremental = this._incremental;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._reportParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportParameters = this._reportParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionTableConfigurationWorkdayReportParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._incremental = undefined;
      this._parameters = undefined;
      this._reportParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._incremental = value.incremental;
      this._parameters = value.parameters;
      this._reportParameters.internalValue = value.reportParameters;
    }
  }

  // incremental - computed: false, optional: true, required: false
  private _incremental?: boolean | cdktn.IResolvable; 
  public get incremental() {
    return this.getBooleanAttribute('incremental');
  }
  public set incremental(value: boolean | cdktn.IResolvable) {
    this._incremental = value;
  }
  public resetIncremental() {
    this._incremental = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalInput() {
    return this._incremental;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // report_parameters - computed: false, optional: true, required: false
  private _reportParameters = new PipelineIngestionDefinitionTableConfigurationWorkdayReportParametersReportParametersList(this, "report_parameters", false);
  public get reportParameters() {
    return this._reportParameters;
  }
  public putReportParameters(value: PipelineIngestionDefinitionTableConfigurationWorkdayReportParametersReportParameters[] | cdktn.IResolvable) {
    this._reportParameters.internalValue = value;
  }
  public resetReportParameters() {
    this._reportParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportParametersInput() {
    return this._reportParameters.internalValue;
  }
}
export interface PipelineIngestionDefinitionTableConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#clustering_columns Pipeline#clustering_columns}
  */
  readonly clusteringColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#enable_auto_clustering Pipeline#enable_auto_clustering}
  */
  readonly enableAutoClustering?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#exclude_columns Pipeline#exclude_columns}
  */
  readonly excludeColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#include_columns Pipeline#include_columns}
  */
  readonly includeColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#primary_keys Pipeline#primary_keys}
  */
  readonly primaryKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#row_filter Pipeline#row_filter}
  */
  readonly rowFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#salesforce_include_formula_fields Pipeline#salesforce_include_formula_fields}
  */
  readonly salesforceIncludeFormulaFields?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#scd_type Pipeline#scd_type}
  */
  readonly scdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#sequence_by Pipeline#sequence_by}
  */
  readonly sequenceBy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#source_metadata_column Pipeline#source_metadata_column}
  */
  readonly sourceMetadataColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#table_properties Pipeline#table_properties}
  */
  readonly tableProperties?: { [key: string]: string };
  /**
  * auto_full_refresh_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#auto_full_refresh_policy Pipeline#auto_full_refresh_policy}
  */
  readonly autoFullRefreshPolicy?: PipelineIngestionDefinitionTableConfigurationAutoFullRefreshPolicy;
  /**
  * query_based_connector_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#query_based_connector_config Pipeline#query_based_connector_config}
  */
  readonly queryBasedConnectorConfig?: PipelineIngestionDefinitionTableConfigurationQueryBasedConnectorConfig;
  /**
  * workday_report_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#workday_report_parameters Pipeline#workday_report_parameters}
  */
  readonly workdayReportParameters?: PipelineIngestionDefinitionTableConfigurationWorkdayReportParameters;
}

export function pipelineIngestionDefinitionTableConfigurationToTerraform(struct?: PipelineIngestionDefinitionTableConfigurationOutputReference | PipelineIngestionDefinitionTableConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    clustering_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.clusteringColumns),
    enable_auto_clustering: cdktn.booleanToTerraform(struct!.enableAutoClustering),
    exclude_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeColumns),
    include_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeColumns),
    primary_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.primaryKeys),
    row_filter: cdktn.stringToTerraform(struct!.rowFilter),
    salesforce_include_formula_fields: cdktn.booleanToTerraform(struct!.salesforceIncludeFormulaFields),
    scd_type: cdktn.stringToTerraform(struct!.scdType),
    sequence_by: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sequenceBy),
    source_metadata_column: cdktn.stringToTerraform(struct!.sourceMetadataColumn),
    table_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tableProperties),
    auto_full_refresh_policy: pipelineIngestionDefinitionTableConfigurationAutoFullRefreshPolicyToTerraform(struct!.autoFullRefreshPolicy),
    query_based_connector_config: pipelineIngestionDefinitionTableConfigurationQueryBasedConnectorConfigToTerraform(struct!.queryBasedConnectorConfig),
    workday_report_parameters: pipelineIngestionDefinitionTableConfigurationWorkdayReportParametersToTerraform(struct!.workdayReportParameters),
  }
}


export function pipelineIngestionDefinitionTableConfigurationToHclTerraform(struct?: PipelineIngestionDefinitionTableConfigurationOutputReference | PipelineIngestionDefinitionTableConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    clustering_columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.clusteringColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_auto_clustering: {
      value: cdktn.booleanToHclTerraform(struct!.enableAutoClustering),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    primary_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.primaryKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    row_filter: {
      value: cdktn.stringToHclTerraform(struct!.rowFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    salesforce_include_formula_fields: {
      value: cdktn.booleanToHclTerraform(struct!.salesforceIncludeFormulaFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scd_type: {
      value: cdktn.stringToHclTerraform(struct!.scdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sequence_by: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sequenceBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_metadata_column: {
      value: cdktn.stringToHclTerraform(struct!.sourceMetadataColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tableProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    auto_full_refresh_policy: {
      value: pipelineIngestionDefinitionTableConfigurationAutoFullRefreshPolicyToHclTerraform(struct!.autoFullRefreshPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionTableConfigurationAutoFullRefreshPolicyList",
    },
    query_based_connector_config: {
      value: pipelineIngestionDefinitionTableConfigurationQueryBasedConnectorConfigToHclTerraform(struct!.queryBasedConnectorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionTableConfigurationQueryBasedConnectorConfigList",
    },
    workday_report_parameters: {
      value: pipelineIngestionDefinitionTableConfigurationWorkdayReportParametersToHclTerraform(struct!.workdayReportParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionTableConfigurationWorkdayReportParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionTableConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineIngestionDefinitionTableConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusteringColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusteringColumns = this._clusteringColumns;
    }
    if (this._enableAutoClustering !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoClustering = this._enableAutoClustering;
    }
    if (this._excludeColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeColumns = this._excludeColumns;
    }
    if (this._includeColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeColumns = this._includeColumns;
    }
    if (this._primaryKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKeys = this._primaryKeys;
    }
    if (this._rowFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowFilter = this._rowFilter;
    }
    if (this._salesforceIncludeFormulaFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceIncludeFormulaFields = this._salesforceIncludeFormulaFields;
    }
    if (this._scdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scdType = this._scdType;
    }
    if (this._sequenceBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceBy = this._sequenceBy;
    }
    if (this._sourceMetadataColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceMetadataColumn = this._sourceMetadataColumn;
    }
    if (this._tableProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableProperties = this._tableProperties;
    }
    if (this._autoFullRefreshPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoFullRefreshPolicy = this._autoFullRefreshPolicy?.internalValue;
    }
    if (this._queryBasedConnectorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryBasedConnectorConfig = this._queryBasedConnectorConfig?.internalValue;
    }
    if (this._workdayReportParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workdayReportParameters = this._workdayReportParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinitionTableConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusteringColumns = undefined;
      this._enableAutoClustering = undefined;
      this._excludeColumns = undefined;
      this._includeColumns = undefined;
      this._primaryKeys = undefined;
      this._rowFilter = undefined;
      this._salesforceIncludeFormulaFields = undefined;
      this._scdType = undefined;
      this._sequenceBy = undefined;
      this._sourceMetadataColumn = undefined;
      this._tableProperties = undefined;
      this._autoFullRefreshPolicy.internalValue = undefined;
      this._queryBasedConnectorConfig.internalValue = undefined;
      this._workdayReportParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusteringColumns = value.clusteringColumns;
      this._enableAutoClustering = value.enableAutoClustering;
      this._excludeColumns = value.excludeColumns;
      this._includeColumns = value.includeColumns;
      this._primaryKeys = value.primaryKeys;
      this._rowFilter = value.rowFilter;
      this._salesforceIncludeFormulaFields = value.salesforceIncludeFormulaFields;
      this._scdType = value.scdType;
      this._sequenceBy = value.sequenceBy;
      this._sourceMetadataColumn = value.sourceMetadataColumn;
      this._tableProperties = value.tableProperties;
      this._autoFullRefreshPolicy.internalValue = value.autoFullRefreshPolicy;
      this._queryBasedConnectorConfig.internalValue = value.queryBasedConnectorConfig;
      this._workdayReportParameters.internalValue = value.workdayReportParameters;
    }
  }

  // clustering_columns - computed: false, optional: true, required: false
  private _clusteringColumns?: string[]; 
  public get clusteringColumns() {
    return this.getListAttribute('clustering_columns');
  }
  public set clusteringColumns(value: string[]) {
    this._clusteringColumns = value;
  }
  public resetClusteringColumns() {
    this._clusteringColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusteringColumnsInput() {
    return this._clusteringColumns;
  }

  // enable_auto_clustering - computed: false, optional: true, required: false
  private _enableAutoClustering?: boolean | cdktn.IResolvable; 
  public get enableAutoClustering() {
    return this.getBooleanAttribute('enable_auto_clustering');
  }
  public set enableAutoClustering(value: boolean | cdktn.IResolvable) {
    this._enableAutoClustering = value;
  }
  public resetEnableAutoClustering() {
    this._enableAutoClustering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoClusteringInput() {
    return this._enableAutoClustering;
  }

  // exclude_columns - computed: false, optional: true, required: false
  private _excludeColumns?: string[]; 
  public get excludeColumns() {
    return this.getListAttribute('exclude_columns');
  }
  public set excludeColumns(value: string[]) {
    this._excludeColumns = value;
  }
  public resetExcludeColumns() {
    this._excludeColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeColumnsInput() {
    return this._excludeColumns;
  }

  // include_columns - computed: false, optional: true, required: false
  private _includeColumns?: string[]; 
  public get includeColumns() {
    return this.getListAttribute('include_columns');
  }
  public set includeColumns(value: string[]) {
    this._includeColumns = value;
  }
  public resetIncludeColumns() {
    this._includeColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeColumnsInput() {
    return this._includeColumns;
  }

  // primary_keys - computed: false, optional: true, required: false
  private _primaryKeys?: string[]; 
  public get primaryKeys() {
    return this.getListAttribute('primary_keys');
  }
  public set primaryKeys(value: string[]) {
    this._primaryKeys = value;
  }
  public resetPrimaryKeys() {
    this._primaryKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeysInput() {
    return this._primaryKeys;
  }

  // row_filter - computed: false, optional: true, required: false
  private _rowFilter?: string; 
  public get rowFilter() {
    return this.getStringAttribute('row_filter');
  }
  public set rowFilter(value: string) {
    this._rowFilter = value;
  }
  public resetRowFilter() {
    this._rowFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowFilterInput() {
    return this._rowFilter;
  }

  // salesforce_include_formula_fields - computed: false, optional: true, required: false
  private _salesforceIncludeFormulaFields?: boolean | cdktn.IResolvable; 
  public get salesforceIncludeFormulaFields() {
    return this.getBooleanAttribute('salesforce_include_formula_fields');
  }
  public set salesforceIncludeFormulaFields(value: boolean | cdktn.IResolvable) {
    this._salesforceIncludeFormulaFields = value;
  }
  public resetSalesforceIncludeFormulaFields() {
    this._salesforceIncludeFormulaFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceIncludeFormulaFieldsInput() {
    return this._salesforceIncludeFormulaFields;
  }

  // scd_type - computed: false, optional: true, required: false
  private _scdType?: string; 
  public get scdType() {
    return this.getStringAttribute('scd_type');
  }
  public set scdType(value: string) {
    this._scdType = value;
  }
  public resetScdType() {
    this._scdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scdTypeInput() {
    return this._scdType;
  }

  // sequence_by - computed: false, optional: true, required: false
  private _sequenceBy?: string[]; 
  public get sequenceBy() {
    return this.getListAttribute('sequence_by');
  }
  public set sequenceBy(value: string[]) {
    this._sequenceBy = value;
  }
  public resetSequenceBy() {
    this._sequenceBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceByInput() {
    return this._sequenceBy;
  }

  // source_metadata_column - computed: false, optional: true, required: false
  private _sourceMetadataColumn?: string; 
  public get sourceMetadataColumn() {
    return this.getStringAttribute('source_metadata_column');
  }
  public set sourceMetadataColumn(value: string) {
    this._sourceMetadataColumn = value;
  }
  public resetSourceMetadataColumn() {
    this._sourceMetadataColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMetadataColumnInput() {
    return this._sourceMetadataColumn;
  }

  // table_properties - computed: false, optional: true, required: false
  private _tableProperties?: { [key: string]: string }; 
  public get tableProperties() {
    return this.getStringMapAttribute('table_properties');
  }
  public set tableProperties(value: { [key: string]: string }) {
    this._tableProperties = value;
  }
  public resetTableProperties() {
    this._tableProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablePropertiesInput() {
    return this._tableProperties;
  }

  // auto_full_refresh_policy - computed: false, optional: true, required: false
  private _autoFullRefreshPolicy = new PipelineIngestionDefinitionTableConfigurationAutoFullRefreshPolicyOutputReference(this, "auto_full_refresh_policy");
  public get autoFullRefreshPolicy() {
    return this._autoFullRefreshPolicy;
  }
  public putAutoFullRefreshPolicy(value: PipelineIngestionDefinitionTableConfigurationAutoFullRefreshPolicy) {
    this._autoFullRefreshPolicy.internalValue = value;
  }
  public resetAutoFullRefreshPolicy() {
    this._autoFullRefreshPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFullRefreshPolicyInput() {
    return this._autoFullRefreshPolicy.internalValue;
  }

  // query_based_connector_config - computed: false, optional: true, required: false
  private _queryBasedConnectorConfig = new PipelineIngestionDefinitionTableConfigurationQueryBasedConnectorConfigOutputReference(this, "query_based_connector_config");
  public get queryBasedConnectorConfig() {
    return this._queryBasedConnectorConfig;
  }
  public putQueryBasedConnectorConfig(value: PipelineIngestionDefinitionTableConfigurationQueryBasedConnectorConfig) {
    this._queryBasedConnectorConfig.internalValue = value;
  }
  public resetQueryBasedConnectorConfig() {
    this._queryBasedConnectorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryBasedConnectorConfigInput() {
    return this._queryBasedConnectorConfig.internalValue;
  }

  // workday_report_parameters - computed: false, optional: true, required: false
  private _workdayReportParameters = new PipelineIngestionDefinitionTableConfigurationWorkdayReportParametersOutputReference(this, "workday_report_parameters");
  public get workdayReportParameters() {
    return this._workdayReportParameters;
  }
  public putWorkdayReportParameters(value: PipelineIngestionDefinitionTableConfigurationWorkdayReportParameters) {
    this._workdayReportParameters.internalValue = value;
  }
  public resetWorkdayReportParameters() {
    this._workdayReportParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workdayReportParametersInput() {
    return this._workdayReportParameters.internalValue;
  }
}
export interface PipelineIngestionDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#connection_name Pipeline#connection_name}
  */
  readonly connectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#connector_type Pipeline#connector_type}
  */
  readonly connectorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#ingest_from_uc_foreign_catalog Pipeline#ingest_from_uc_foreign_catalog}
  */
  readonly ingestFromUcForeignCatalog?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#ingestion_gateway_id Pipeline#ingestion_gateway_id}
  */
  readonly ingestionGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#netsuite_jar_path Pipeline#netsuite_jar_path}
  */
  readonly netsuiteJarPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#source_type Pipeline#source_type}
  */
  readonly sourceType?: string;
  /**
  * data_staging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#data_staging_options Pipeline#data_staging_options}
  */
  readonly dataStagingOptions?: PipelineIngestionDefinitionDataStagingOptions;
  /**
  * full_refresh_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#full_refresh_window Pipeline#full_refresh_window}
  */
  readonly fullRefreshWindow?: PipelineIngestionDefinitionFullRefreshWindow;
  /**
  * objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#objects Pipeline#objects}
  */
  readonly objects?: PipelineIngestionDefinitionObjects[] | cdktn.IResolvable;
  /**
  * source_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#source_configurations Pipeline#source_configurations}
  */
  readonly sourceConfigurations?: PipelineIngestionDefinitionSourceConfigurations[] | cdktn.IResolvable;
  /**
  * table_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#table_configuration Pipeline#table_configuration}
  */
  readonly tableConfiguration?: PipelineIngestionDefinitionTableConfiguration;
}

export function pipelineIngestionDefinitionToTerraform(struct?: PipelineIngestionDefinitionOutputReference | PipelineIngestionDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_name: cdktn.stringToTerraform(struct!.connectionName),
    connector_type: cdktn.stringToTerraform(struct!.connectorType),
    ingest_from_uc_foreign_catalog: cdktn.booleanToTerraform(struct!.ingestFromUcForeignCatalog),
    ingestion_gateway_id: cdktn.stringToTerraform(struct!.ingestionGatewayId),
    netsuite_jar_path: cdktn.stringToTerraform(struct!.netsuiteJarPath),
    source_type: cdktn.stringToTerraform(struct!.sourceType),
    data_staging_options: pipelineIngestionDefinitionDataStagingOptionsToTerraform(struct!.dataStagingOptions),
    full_refresh_window: pipelineIngestionDefinitionFullRefreshWindowToTerraform(struct!.fullRefreshWindow),
    objects: cdktn.listMapper(pipelineIngestionDefinitionObjectsToTerraform, true)(struct!.objects),
    source_configurations: cdktn.listMapper(pipelineIngestionDefinitionSourceConfigurationsToTerraform, true)(struct!.sourceConfigurations),
    table_configuration: pipelineIngestionDefinitionTableConfigurationToTerraform(struct!.tableConfiguration),
  }
}


export function pipelineIngestionDefinitionToHclTerraform(struct?: PipelineIngestionDefinitionOutputReference | PipelineIngestionDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_name: {
      value: cdktn.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_type: {
      value: cdktn.stringToHclTerraform(struct!.connectorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingest_from_uc_foreign_catalog: {
      value: cdktn.booleanToHclTerraform(struct!.ingestFromUcForeignCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ingestion_gateway_id: {
      value: cdktn.stringToHclTerraform(struct!.ingestionGatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netsuite_jar_path: {
      value: cdktn.stringToHclTerraform(struct!.netsuiteJarPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktn.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_staging_options: {
      value: pipelineIngestionDefinitionDataStagingOptionsToHclTerraform(struct!.dataStagingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionDataStagingOptionsList",
    },
    full_refresh_window: {
      value: pipelineIngestionDefinitionFullRefreshWindowToHclTerraform(struct!.fullRefreshWindow),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionFullRefreshWindowList",
    },
    objects: {
      value: cdktn.listMapperHcl(pipelineIngestionDefinitionObjectsToHclTerraform, true)(struct!.objects),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionObjectsList",
    },
    source_configurations: {
      value: cdktn.listMapperHcl(pipelineIngestionDefinitionSourceConfigurationsToHclTerraform, true)(struct!.sourceConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionSourceConfigurationsList",
    },
    table_configuration: {
      value: pipelineIngestionDefinitionTableConfigurationToHclTerraform(struct!.tableConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineIngestionDefinitionTableConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineIngestionDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineIngestionDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._connectorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorType = this._connectorType;
    }
    if (this._ingestFromUcForeignCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestFromUcForeignCatalog = this._ingestFromUcForeignCatalog;
    }
    if (this._ingestionGatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestionGatewayId = this._ingestionGatewayId;
    }
    if (this._netsuiteJarPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.netsuiteJarPath = this._netsuiteJarPath;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._dataStagingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStagingOptions = this._dataStagingOptions?.internalValue;
    }
    if (this._fullRefreshWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullRefreshWindow = this._fullRefreshWindow?.internalValue;
    }
    if (this._objects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objects = this._objects?.internalValue;
    }
    if (this._sourceConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConfigurations = this._sourceConfigurations?.internalValue;
    }
    if (this._tableConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableConfiguration = this._tableConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineIngestionDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionName = undefined;
      this._connectorType = undefined;
      this._ingestFromUcForeignCatalog = undefined;
      this._ingestionGatewayId = undefined;
      this._netsuiteJarPath = undefined;
      this._sourceType = undefined;
      this._dataStagingOptions.internalValue = undefined;
      this._fullRefreshWindow.internalValue = undefined;
      this._objects.internalValue = undefined;
      this._sourceConfigurations.internalValue = undefined;
      this._tableConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionName = value.connectionName;
      this._connectorType = value.connectorType;
      this._ingestFromUcForeignCatalog = value.ingestFromUcForeignCatalog;
      this._ingestionGatewayId = value.ingestionGatewayId;
      this._netsuiteJarPath = value.netsuiteJarPath;
      this._sourceType = value.sourceType;
      this._dataStagingOptions.internalValue = value.dataStagingOptions;
      this._fullRefreshWindow.internalValue = value.fullRefreshWindow;
      this._objects.internalValue = value.objects;
      this._sourceConfigurations.internalValue = value.sourceConfigurations;
      this._tableConfiguration.internalValue = value.tableConfiguration;
    }
  }

  // connection_name - computed: false, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // connector_type - computed: false, optional: true, required: false
  private _connectorType?: string; 
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }
  public set connectorType(value: string) {
    this._connectorType = value;
  }
  public resetConnectorType() {
    this._connectorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorTypeInput() {
    return this._connectorType;
  }

  // ingest_from_uc_foreign_catalog - computed: false, optional: true, required: false
  private _ingestFromUcForeignCatalog?: boolean | cdktn.IResolvable; 
  public get ingestFromUcForeignCatalog() {
    return this.getBooleanAttribute('ingest_from_uc_foreign_catalog');
  }
  public set ingestFromUcForeignCatalog(value: boolean | cdktn.IResolvable) {
    this._ingestFromUcForeignCatalog = value;
  }
  public resetIngestFromUcForeignCatalog() {
    this._ingestFromUcForeignCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestFromUcForeignCatalogInput() {
    return this._ingestFromUcForeignCatalog;
  }

  // ingestion_gateway_id - computed: false, optional: true, required: false
  private _ingestionGatewayId?: string; 
  public get ingestionGatewayId() {
    return this.getStringAttribute('ingestion_gateway_id');
  }
  public set ingestionGatewayId(value: string) {
    this._ingestionGatewayId = value;
  }
  public resetIngestionGatewayId() {
    this._ingestionGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionGatewayIdInput() {
    return this._ingestionGatewayId;
  }

  // netsuite_jar_path - computed: false, optional: true, required: false
  private _netsuiteJarPath?: string; 
  public get netsuiteJarPath() {
    return this.getStringAttribute('netsuite_jar_path');
  }
  public set netsuiteJarPath(value: string) {
    this._netsuiteJarPath = value;
  }
  public resetNetsuiteJarPath() {
    this._netsuiteJarPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netsuiteJarPathInput() {
    return this._netsuiteJarPath;
  }

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // data_staging_options - computed: false, optional: true, required: false
  private _dataStagingOptions = new PipelineIngestionDefinitionDataStagingOptionsOutputReference(this, "data_staging_options");
  public get dataStagingOptions() {
    return this._dataStagingOptions;
  }
  public putDataStagingOptions(value: PipelineIngestionDefinitionDataStagingOptions) {
    this._dataStagingOptions.internalValue = value;
  }
  public resetDataStagingOptions() {
    this._dataStagingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStagingOptionsInput() {
    return this._dataStagingOptions.internalValue;
  }

  // full_refresh_window - computed: false, optional: true, required: false
  private _fullRefreshWindow = new PipelineIngestionDefinitionFullRefreshWindowOutputReference(this, "full_refresh_window");
  public get fullRefreshWindow() {
    return this._fullRefreshWindow;
  }
  public putFullRefreshWindow(value: PipelineIngestionDefinitionFullRefreshWindow) {
    this._fullRefreshWindow.internalValue = value;
  }
  public resetFullRefreshWindow() {
    this._fullRefreshWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullRefreshWindowInput() {
    return this._fullRefreshWindow.internalValue;
  }

  // objects - computed: false, optional: true, required: false
  private _objects = new PipelineIngestionDefinitionObjectsList(this, "objects", false);
  public get objects() {
    return this._objects;
  }
  public putObjects(value: PipelineIngestionDefinitionObjects[] | cdktn.IResolvable) {
    this._objects.internalValue = value;
  }
  public resetObjects() {
    this._objects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects.internalValue;
  }

  // source_configurations - computed: false, optional: true, required: false
  private _sourceConfigurations = new PipelineIngestionDefinitionSourceConfigurationsList(this, "source_configurations", false);
  public get sourceConfigurations() {
    return this._sourceConfigurations;
  }
  public putSourceConfigurations(value: PipelineIngestionDefinitionSourceConfigurations[] | cdktn.IResolvable) {
    this._sourceConfigurations.internalValue = value;
  }
  public resetSourceConfigurations() {
    this._sourceConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigurationsInput() {
    return this._sourceConfigurations.internalValue;
  }

  // table_configuration - computed: false, optional: true, required: false
  private _tableConfiguration = new PipelineIngestionDefinitionTableConfigurationOutputReference(this, "table_configuration");
  public get tableConfiguration() {
    return this._tableConfiguration;
  }
  public putTableConfiguration(value: PipelineIngestionDefinitionTableConfiguration) {
    this._tableConfiguration.internalValue = value;
  }
  public resetTableConfiguration() {
    this._tableConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableConfigurationInput() {
    return this._tableConfiguration.internalValue;
  }
}
export interface PipelineLatestUpdates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#creation_time Pipeline#creation_time}
  */
  readonly creationTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#state Pipeline#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#update_id Pipeline#update_id}
  */
  readonly updateId?: string;
}

export function pipelineLatestUpdatesToTerraform(struct?: PipelineLatestUpdates | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    creation_time: cdktn.stringToTerraform(struct!.creationTime),
    state: cdktn.stringToTerraform(struct!.state),
    update_id: cdktn.stringToTerraform(struct!.updateId),
  }
}


export function pipelineLatestUpdatesToHclTerraform(struct?: PipelineLatestUpdates | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    creation_time: {
      value: cdktn.stringToHclTerraform(struct!.creationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_id: {
      value: cdktn.stringToHclTerraform(struct!.updateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineLatestUpdatesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PipelineLatestUpdates | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationTime = this._creationTime;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._updateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateId = this._updateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineLatestUpdates | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._creationTime = undefined;
      this._state = undefined;
      this._updateId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._creationTime = value.creationTime;
      this._state = value.state;
      this._updateId = value.updateId;
    }
  }

  // creation_time - computed: false, optional: true, required: false
  private _creationTime?: string; 
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }
  public set creationTime(value: string) {
    this._creationTime = value;
  }
  public resetCreationTime() {
    this._creationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTimeInput() {
    return this._creationTime;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // update_id - computed: false, optional: true, required: false
  private _updateId?: string; 
  public get updateId() {
    return this.getStringAttribute('update_id');
  }
  public set updateId(value: string) {
    this._updateId = value;
  }
  public resetUpdateId() {
    this._updateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIdInput() {
    return this._updateId;
  }
}

export class PipelineLatestUpdatesList extends cdktn.ComplexList {
  public internalValue? : PipelineLatestUpdates[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PipelineLatestUpdatesOutputReference {
    return new PipelineLatestUpdatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineLibraryFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#path Pipeline#path}
  */
  readonly path: string;
}

export function pipelineLibraryFileToTerraform(struct?: PipelineLibraryFileOutputReference | PipelineLibraryFile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function pipelineLibraryFileToHclTerraform(struct?: PipelineLibraryFileOutputReference | PipelineLibraryFile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineLibraryFileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineLibraryFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineLibraryFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface PipelineLibraryGlob {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#include Pipeline#include}
  */
  readonly include: string;
}

export function pipelineLibraryGlobToTerraform(struct?: PipelineLibraryGlobOutputReference | PipelineLibraryGlob): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include: cdktn.stringToTerraform(struct!.include),
  }
}


export function pipelineLibraryGlobToHclTerraform(struct?: PipelineLibraryGlobOutputReference | PipelineLibraryGlob): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include: {
      value: cdktn.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineLibraryGlobOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineLibraryGlob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineLibraryGlob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._include = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._include = value.include;
    }
  }

  // include - computed: false, optional: false, required: true
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}
export interface PipelineLibraryMaven {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#coordinates Pipeline#coordinates}
  */
  readonly coordinates: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#exclusions Pipeline#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#repo Pipeline#repo}
  */
  readonly repo?: string;
}

export function pipelineLibraryMavenToTerraform(struct?: PipelineLibraryMavenOutputReference | PipelineLibraryMaven): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    coordinates: cdktn.stringToTerraform(struct!.coordinates),
    exclusions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusions),
    repo: cdktn.stringToTerraform(struct!.repo),
  }
}


export function pipelineLibraryMavenToHclTerraform(struct?: PipelineLibraryMavenOutputReference | PipelineLibraryMaven): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    coordinates: {
      value: cdktn.stringToHclTerraform(struct!.coordinates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclusions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    repo: {
      value: cdktn.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineLibraryMavenOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineLibraryMaven | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coordinates !== undefined) {
      hasAnyValues = true;
      internalValueResult.coordinates = this._coordinates;
    }
    if (this._exclusions !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineLibraryMaven | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coordinates = undefined;
      this._exclusions = undefined;
      this._repo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coordinates = value.coordinates;
      this._exclusions = value.exclusions;
      this._repo = value.repo;
    }
  }

  // coordinates - computed: false, optional: false, required: true
  private _coordinates?: string; 
  public get coordinates() {
    return this.getStringAttribute('coordinates');
  }
  public set coordinates(value: string) {
    this._coordinates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatesInput() {
    return this._coordinates;
  }

  // exclusions - computed: false, optional: true, required: false
  private _exclusions?: string[]; 
  public get exclusions() {
    return this.getListAttribute('exclusions');
  }
  public set exclusions(value: string[]) {
    this._exclusions = value;
  }
  public resetExclusions() {
    this._exclusions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }
}
export interface PipelineLibraryNotebook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#path Pipeline#path}
  */
  readonly path: string;
}

export function pipelineLibraryNotebookToTerraform(struct?: PipelineLibraryNotebookOutputReference | PipelineLibraryNotebook): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function pipelineLibraryNotebookToHclTerraform(struct?: PipelineLibraryNotebookOutputReference | PipelineLibraryNotebook): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineLibraryNotebookOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineLibraryNotebook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineLibraryNotebook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface PipelineLibrary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#jar Pipeline#jar}
  */
  readonly jar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#whl Pipeline#whl}
  */
  readonly whl?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#file Pipeline#file}
  */
  readonly file?: PipelineLibraryFile;
  /**
  * glob block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#glob Pipeline#glob}
  */
  readonly glob?: PipelineLibraryGlob;
  /**
  * maven block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#maven Pipeline#maven}
  */
  readonly maven?: PipelineLibraryMaven;
  /**
  * notebook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#notebook Pipeline#notebook}
  */
  readonly notebook?: PipelineLibraryNotebook;
}

export function pipelineLibraryToTerraform(struct?: PipelineLibrary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    jar: cdktn.stringToTerraform(struct!.jar),
    whl: cdktn.stringToTerraform(struct!.whl),
    file: pipelineLibraryFileToTerraform(struct!.file),
    glob: pipelineLibraryGlobToTerraform(struct!.glob),
    maven: pipelineLibraryMavenToTerraform(struct!.maven),
    notebook: pipelineLibraryNotebookToTerraform(struct!.notebook),
  }
}


export function pipelineLibraryToHclTerraform(struct?: PipelineLibrary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    jar: {
      value: cdktn.stringToHclTerraform(struct!.jar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    whl: {
      value: cdktn.stringToHclTerraform(struct!.whl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: pipelineLibraryFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineLibraryFileList",
    },
    glob: {
      value: pipelineLibraryGlobToHclTerraform(struct!.glob),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineLibraryGlobList",
    },
    maven: {
      value: pipelineLibraryMavenToHclTerraform(struct!.maven),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineLibraryMavenList",
    },
    notebook: {
      value: pipelineLibraryNotebookToHclTerraform(struct!.notebook),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineLibraryNotebookList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineLibraryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PipelineLibrary | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jar !== undefined) {
      hasAnyValues = true;
      internalValueResult.jar = this._jar;
    }
    if (this._whl !== undefined) {
      hasAnyValues = true;
      internalValueResult.whl = this._whl;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._glob?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glob = this._glob?.internalValue;
    }
    if (this._maven?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maven = this._maven?.internalValue;
    }
    if (this._notebook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebook = this._notebook?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineLibrary | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jar = undefined;
      this._whl = undefined;
      this._file.internalValue = undefined;
      this._glob.internalValue = undefined;
      this._maven.internalValue = undefined;
      this._notebook.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jar = value.jar;
      this._whl = value.whl;
      this._file.internalValue = value.file;
      this._glob.internalValue = value.glob;
      this._maven.internalValue = value.maven;
      this._notebook.internalValue = value.notebook;
    }
  }

  // jar - computed: false, optional: true, required: false
  private _jar?: string; 
  public get jar() {
    return this.getStringAttribute('jar');
  }
  public set jar(value: string) {
    this._jar = value;
  }
  public resetJar() {
    this._jar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarInput() {
    return this._jar;
  }

  // whl - computed: false, optional: true, required: false
  private _whl?: string; 
  public get whl() {
    return this.getStringAttribute('whl');
  }
  public set whl(value: string) {
    this._whl = value;
  }
  public resetWhl() {
    this._whl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whlInput() {
    return this._whl;
  }

  // file - computed: false, optional: true, required: false
  private _file = new PipelineLibraryFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: PipelineLibraryFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // glob - computed: false, optional: true, required: false
  private _glob = new PipelineLibraryGlobOutputReference(this, "glob");
  public get glob() {
    return this._glob;
  }
  public putGlob(value: PipelineLibraryGlob) {
    this._glob.internalValue = value;
  }
  public resetGlob() {
    this._glob.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globInput() {
    return this._glob.internalValue;
  }

  // maven - computed: false, optional: true, required: false
  private _maven = new PipelineLibraryMavenOutputReference(this, "maven");
  public get maven() {
    return this._maven;
  }
  public putMaven(value: PipelineLibraryMaven) {
    this._maven.internalValue = value;
  }
  public resetMaven() {
    this._maven.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mavenInput() {
    return this._maven.internalValue;
  }

  // notebook - computed: false, optional: true, required: false
  private _notebook = new PipelineLibraryNotebookOutputReference(this, "notebook");
  public get notebook() {
    return this._notebook;
  }
  public putNotebook(value: PipelineLibraryNotebook) {
    this._notebook.internalValue = value;
  }
  public resetNotebook() {
    this._notebook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookInput() {
    return this._notebook.internalValue;
  }
}

export class PipelineLibraryList extends cdktn.ComplexList {
  public internalValue? : PipelineLibrary[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PipelineLibraryOutputReference {
    return new PipelineLibraryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#alerts Pipeline#alerts}
  */
  readonly alerts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#email_recipients Pipeline#email_recipients}
  */
  readonly emailRecipients?: string[];
}

export function pipelineNotificationToTerraform(struct?: PipelineNotification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alerts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alerts),
    email_recipients: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.emailRecipients),
  }
}


export function pipelineNotificationToHclTerraform(struct?: PipelineNotification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alerts: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.alerts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    email_recipients: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.emailRecipients),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineNotificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PipelineNotification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.alerts = this._alerts;
    }
    if (this._emailRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailRecipients = this._emailRecipients;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineNotification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alerts = undefined;
      this._emailRecipients = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alerts = value.alerts;
      this._emailRecipients = value.emailRecipients;
    }
  }

  // alerts - computed: false, optional: true, required: false
  private _alerts?: string[]; 
  public get alerts() {
    return this.getListAttribute('alerts');
  }
  public set alerts(value: string[]) {
    this._alerts = value;
  }
  public resetAlerts() {
    this._alerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsInput() {
    return this._alerts;
  }

  // email_recipients - computed: false, optional: true, required: false
  private _emailRecipients?: string[]; 
  public get emailRecipients() {
    return this.getListAttribute('email_recipients');
  }
  public set emailRecipients(value: string[]) {
    this._emailRecipients = value;
  }
  public resetEmailRecipients() {
    this._emailRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailRecipientsInput() {
    return this._emailRecipients;
  }
}

export class PipelineNotificationList extends cdktn.ComplexList {
  public internalValue? : PipelineNotification[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PipelineNotificationOutputReference {
    return new PipelineNotificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#workspace_id Pipeline#workspace_id}
  */
  readonly workspaceId?: string;
}

export function pipelineProviderConfigToTerraform(struct?: PipelineProviderConfigOutputReference | PipelineProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function pipelineProviderConfigToHclTerraform(struct?: PipelineProviderConfigOutputReference | PipelineProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    workspace_id: {
      value: cdktn.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workspaceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workspaceId = value.workspaceId;
    }
  }

  // workspace_id - computed: true, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}
export interface PipelineRestartWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#days_of_week Pipeline#days_of_week}
  */
  readonly daysOfWeek?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#start_hour Pipeline#start_hour}
  */
  readonly startHour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#time_zone_id Pipeline#time_zone_id}
  */
  readonly timeZoneId?: string;
}

export function pipelineRestartWindowToTerraform(struct?: PipelineRestartWindowOutputReference | PipelineRestartWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    days_of_week: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.daysOfWeek),
    start_hour: cdktn.numberToTerraform(struct!.startHour),
    time_zone_id: cdktn.stringToTerraform(struct!.timeZoneId),
  }
}


export function pipelineRestartWindowToHclTerraform(struct?: PipelineRestartWindowOutputReference | PipelineRestartWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    days_of_week: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.daysOfWeek),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    start_hour: {
      value: cdktn.numberToHclTerraform(struct!.startHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_zone_id: {
      value: cdktn.stringToHclTerraform(struct!.timeZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineRestartWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineRestartWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._startHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.startHour = this._startHour;
    }
    if (this._timeZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZoneId = this._timeZoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineRestartWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysOfWeek = undefined;
      this._startHour = undefined;
      this._timeZoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysOfWeek = value.daysOfWeek;
      this._startHour = value.startHour;
      this._timeZoneId = value.timeZoneId;
    }
  }

  // days_of_week - computed: false, optional: true, required: false
  private _daysOfWeek?: string[]; 
  public get daysOfWeek() {
    return this.getListAttribute('days_of_week');
  }
  public set daysOfWeek(value: string[]) {
    this._daysOfWeek = value;
  }
  public resetDaysOfWeek() {
    this._daysOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek;
  }

  // start_hour - computed: false, optional: false, required: true
  private _startHour?: number; 
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }
  public set startHour(value: number) {
    this._startHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourInput() {
    return this._startHour;
  }

  // time_zone_id - computed: false, optional: true, required: false
  private _timeZoneId?: string; 
  public get timeZoneId() {
    return this.getStringAttribute('time_zone_id');
  }
  public set timeZoneId(value: string) {
    this._timeZoneId = value;
  }
  public resetTimeZoneId() {
    this._timeZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneIdInput() {
    return this._timeZoneId;
  }
}
export interface PipelineRunAs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#group_name Pipeline#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#service_principal_name Pipeline#service_principal_name}
  */
  readonly servicePrincipalName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#user_name Pipeline#user_name}
  */
  readonly userName?: string;
}

export function pipelineRunAsToTerraform(struct?: PipelineRunAsOutputReference | PipelineRunAs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_name: cdktn.stringToTerraform(struct!.groupName),
    service_principal_name: cdktn.stringToTerraform(struct!.servicePrincipalName),
    user_name: cdktn.stringToTerraform(struct!.userName),
  }
}


export function pipelineRunAsToHclTerraform(struct?: PipelineRunAsOutputReference | PipelineRunAs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group_name: {
      value: cdktn.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_principal_name: {
      value: cdktn.stringToHclTerraform(struct!.servicePrincipalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktn.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineRunAsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineRunAs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._servicePrincipalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipalName = this._servicePrincipalName;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineRunAs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupName = undefined;
      this._servicePrincipalName = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupName = value.groupName;
      this._servicePrincipalName = value.servicePrincipalName;
      this._userName = value.userName;
    }
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // service_principal_name - computed: false, optional: true, required: false
  private _servicePrincipalName?: string; 
  public get servicePrincipalName() {
    return this.getStringAttribute('service_principal_name');
  }
  public set servicePrincipalName(value: string) {
    this._servicePrincipalName = value;
  }
  public resetServicePrincipalName() {
    this._servicePrincipalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalNameInput() {
    return this._servicePrincipalName;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface PipelineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#default Pipeline#default}
  */
  readonly default?: string;
}

export function pipelineTimeoutsToTerraform(struct?: PipelineTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default: cdktn.stringToTerraform(struct!.default),
  }
}


export function pipelineTimeoutsToHclTerraform(struct?: PipelineTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default: {
      value: cdktn.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}
export interface PipelineTriggerCron {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#quartz_cron_schedule Pipeline#quartz_cron_schedule}
  */
  readonly quartzCronSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#timezone_id Pipeline#timezone_id}
  */
  readonly timezoneId?: string;
}

export function pipelineTriggerCronToTerraform(struct?: PipelineTriggerCronOutputReference | PipelineTriggerCron): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    quartz_cron_schedule: cdktn.stringToTerraform(struct!.quartzCronSchedule),
    timezone_id: cdktn.stringToTerraform(struct!.timezoneId),
  }
}


export function pipelineTriggerCronToHclTerraform(struct?: PipelineTriggerCronOutputReference | PipelineTriggerCron): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    quartz_cron_schedule: {
      value: cdktn.stringToHclTerraform(struct!.quartzCronSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone_id: {
      value: cdktn.stringToHclTerraform(struct!.timezoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineTriggerCronOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineTriggerCron | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quartzCronSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.quartzCronSchedule = this._quartzCronSchedule;
    }
    if (this._timezoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezoneId = this._timezoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineTriggerCron | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._quartzCronSchedule = undefined;
      this._timezoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._quartzCronSchedule = value.quartzCronSchedule;
      this._timezoneId = value.timezoneId;
    }
  }

  // quartz_cron_schedule - computed: false, optional: true, required: false
  private _quartzCronSchedule?: string; 
  public get quartzCronSchedule() {
    return this.getStringAttribute('quartz_cron_schedule');
  }
  public set quartzCronSchedule(value: string) {
    this._quartzCronSchedule = value;
  }
  public resetQuartzCronSchedule() {
    this._quartzCronSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quartzCronScheduleInput() {
    return this._quartzCronSchedule;
  }

  // timezone_id - computed: false, optional: true, required: false
  private _timezoneId?: string; 
  public get timezoneId() {
    return this.getStringAttribute('timezone_id');
  }
  public set timezoneId(value: string) {
    this._timezoneId = value;
  }
  public resetTimezoneId() {
    this._timezoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneIdInput() {
    return this._timezoneId;
  }
}
export interface PipelineTriggerManual {
}

export function pipelineTriggerManualToTerraform(struct?: PipelineTriggerManualOutputReference | PipelineTriggerManual): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function pipelineTriggerManualToHclTerraform(struct?: PipelineTriggerManualOutputReference | PipelineTriggerManual): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class PipelineTriggerManualOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineTriggerManual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineTriggerManual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface PipelineTrigger {
  /**
  * cron block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#cron Pipeline#cron}
  */
  readonly cron?: PipelineTriggerCron;
  /**
  * manual block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/pipeline#manual Pipeline#manual}
  */
  readonly manual?: PipelineTriggerManual;
}

export function pipelineTriggerToTerraform(struct?: PipelineTriggerOutputReference | PipelineTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cron: pipelineTriggerCronToTerraform(struct!.cron),
    manual: pipelineTriggerManualToTerraform(struct!.manual),
  }
}


export function pipelineTriggerToHclTerraform(struct?: PipelineTriggerOutputReference | PipelineTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cron: {
      value: pipelineTriggerCronToHclTerraform(struct!.cron),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineTriggerCronList",
    },
    manual: {
      value: pipelineTriggerManualToHclTerraform(struct!.manual),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineTriggerManualList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineTriggerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cron?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cron = this._cron?.internalValue;
    }
    if (this._manual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manual = this._manual?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cron.internalValue = undefined;
      this._manual.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cron.internalValue = value.cron;
      this._manual.internalValue = value.manual;
    }
  }

  // cron - computed: false, optional: true, required: false
  private _cron = new PipelineTriggerCronOutputReference(this, "cron");
  public get cron() {
    return this._cron;
  }
  public putCron(value: PipelineTriggerCron) {
    this._cron.internalValue = value;
  }
  public resetCron() {
    this._cron.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron.internalValue;
  }

  // manual - computed: false, optional: true, required: false
  private _manual = new PipelineTriggerManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: PipelineTriggerManual) {
    this._manual.internalValue = value;
  }
  public resetManual() {
    this._manual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInput() {
    return this._manual.internalValue;
  }
}
