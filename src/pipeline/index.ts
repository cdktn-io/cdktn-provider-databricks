/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// generated from terraform resource schema

import { PipelineCluster, 
pipelineClusterToTerraform, 
pipelineClusterToHclTerraform, 
PipelineClusterList, 
PipelineDeployment, 
pipelineDeploymentToTerraform, 
pipelineDeploymentToHclTerraform, 
PipelineDeploymentOutputReference, 
PipelineEnvironment, 
pipelineEnvironmentToTerraform, 
pipelineEnvironmentToHclTerraform, 
PipelineEnvironmentOutputReference, 
PipelineEventLog, 
pipelineEventLogToTerraform, 
pipelineEventLogToHclTerraform, 
PipelineEventLogOutputReference, 
PipelineFilters, 
pipelineFiltersToTerraform, 
pipelineFiltersToHclTerraform, 
PipelineFiltersOutputReference, 
PipelineGatewayDefinition, 
pipelineGatewayDefinitionToTerraform, 
pipelineGatewayDefinitionToHclTerraform, 
PipelineGatewayDefinitionOutputReference, 
PipelineIngestionDefinition, 
pipelineIngestionDefinitionToTerraform, 
pipelineIngestionDefinitionToHclTerraform, 
PipelineIngestionDefinitionOutputReference, 
PipelineLatestUpdates, 
pipelineLatestUpdatesToTerraform, 
pipelineLatestUpdatesToHclTerraform, 
PipelineLatestUpdatesList, 
PipelineLibrary, 
pipelineLibraryToTerraform, 
pipelineLibraryToHclTerraform, 
PipelineLibraryList, 
PipelineNotification, 
pipelineNotificationToTerraform, 
pipelineNotificationToHclTerraform, 
PipelineNotificationList, 
PipelineProviderConfig, 
pipelineProviderConfigToTerraform, 
pipelineProviderConfigToHclTerraform, 
PipelineProviderConfigOutputReference, 
PipelineRestartWindow, 
pipelineRestartWindowToTerraform, 
pipelineRestartWindowToHclTerraform, 
PipelineRestartWindowOutputReference, 
PipelineRunAs, 
pipelineRunAsToTerraform, 
pipelineRunAsToHclTerraform, 
PipelineRunAsOutputReference, 
PipelineTimeouts, 
pipelineTimeoutsToTerraform, 
pipelineTimeoutsToHclTerraform, 
PipelineTimeoutsOutputReference, 
PipelineTrigger, 
pipelineTriggerToTerraform, 
pipelineTriggerToHclTerraform, 
PipelineTriggerOutputReference} from './index-structs/index';
export * from './index-structs/index';
import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface PipelineConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#allow_duplicate_names Pipeline#allow_duplicate_names}
  */
  readonly allowDuplicateNames?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#budget_policy_id Pipeline#budget_policy_id}
  */
  readonly budgetPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#catalog Pipeline#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#cause Pipeline#cause}
  */
  readonly cause?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#channel Pipeline#channel}
  */
  readonly channel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#cluster_id Pipeline#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#configuration Pipeline#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#continuous Pipeline#continuous}
  */
  readonly continuous?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#creator_user_name Pipeline#creator_user_name}
  */
  readonly creatorUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#development Pipeline#development}
  */
  readonly development?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#edition Pipeline#edition}
  */
  readonly edition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#expected_last_modified Pipeline#expected_last_modified}
  */
  readonly expectedLastModified?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#health Pipeline#health}
  */
  readonly health?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#id Pipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#last_modified Pipeline#last_modified}
  */
  readonly lastModified?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#name Pipeline#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#photon Pipeline#photon}
  */
  readonly photon?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#root_path Pipeline#root_path}
  */
  readonly rootPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#run_as_user_name Pipeline#run_as_user_name}
  */
  readonly runAsUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#schema Pipeline#schema}
  */
  readonly schema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#serverless Pipeline#serverless}
  */
  readonly serverless?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#serverless_compute_id Pipeline#serverless_compute_id}
  */
  readonly serverlessComputeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#state Pipeline#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#storage Pipeline#storage}
  */
  readonly storage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#tags Pipeline#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#target Pipeline#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#url Pipeline#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#usage_policy_id Pipeline#usage_policy_id}
  */
  readonly usagePolicyId?: string;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#cluster Pipeline#cluster}
  */
  readonly cluster?: PipelineCluster[] | cdktn.IResolvable;
  /**
  * deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#deployment Pipeline#deployment}
  */
  readonly deployment?: PipelineDeployment;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#environment Pipeline#environment}
  */
  readonly environment?: PipelineEnvironment;
  /**
  * event_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#event_log Pipeline#event_log}
  */
  readonly eventLog?: PipelineEventLog;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#filters Pipeline#filters}
  */
  readonly filters?: PipelineFilters;
  /**
  * gateway_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#gateway_definition Pipeline#gateway_definition}
  */
  readonly gatewayDefinition?: PipelineGatewayDefinition;
  /**
  * ingestion_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#ingestion_definition Pipeline#ingestion_definition}
  */
  readonly ingestionDefinition?: PipelineIngestionDefinition;
  /**
  * latest_updates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#latest_updates Pipeline#latest_updates}
  */
  readonly latestUpdates?: PipelineLatestUpdates[] | cdktn.IResolvable;
  /**
  * library block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#library Pipeline#library}
  */
  readonly library?: PipelineLibrary[] | cdktn.IResolvable;
  /**
  * notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#notification Pipeline#notification}
  */
  readonly notification?: PipelineNotification[] | cdktn.IResolvable;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#provider_config Pipeline#provider_config}
  */
  readonly providerConfig?: PipelineProviderConfig;
  /**
  * restart_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#restart_window Pipeline#restart_window}
  */
  readonly restartWindow?: PipelineRestartWindow;
  /**
  * run_as block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#run_as Pipeline#run_as}
  */
  readonly runAs?: PipelineRunAs;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#timeouts Pipeline#timeouts}
  */
  readonly timeouts?: PipelineTimeouts;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#trigger Pipeline#trigger}
  */
  readonly trigger?: PipelineTrigger;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline databricks_pipeline}
*/
export class Pipeline extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Pipeline resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pipeline to import
  * @param importFromId The id of the existing Pipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/pipeline databricks_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PipelineConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PipelineConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.128.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowDuplicateNames = config.allowDuplicateNames;
    this._budgetPolicyId = config.budgetPolicyId;
    this._catalog = config.catalog;
    this._cause = config.cause;
    this._channel = config.channel;
    this._clusterId = config.clusterId;
    this._configuration = config.configuration;
    this._continuous = config.continuous;
    this._creatorUserName = config.creatorUserName;
    this._development = config.development;
    this._edition = config.edition;
    this._expectedLastModified = config.expectedLastModified;
    this._health = config.health;
    this._id = config.id;
    this._lastModified = config.lastModified;
    this._name = config.name;
    this._photon = config.photon;
    this._rootPath = config.rootPath;
    this._runAsUserName = config.runAsUserName;
    this._schema = config.schema;
    this._serverless = config.serverless;
    this._serverlessComputeId = config.serverlessComputeId;
    this._state = config.state;
    this._storage = config.storage;
    this._tags = config.tags;
    this._target = config.target;
    this._url = config.url;
    this._usagePolicyId = config.usagePolicyId;
    this._cluster.internalValue = config.cluster;
    this._deployment.internalValue = config.deployment;
    this._environment.internalValue = config.environment;
    this._eventLog.internalValue = config.eventLog;
    this._filters.internalValue = config.filters;
    this._gatewayDefinition.internalValue = config.gatewayDefinition;
    this._ingestionDefinition.internalValue = config.ingestionDefinition;
    this._latestUpdates.internalValue = config.latestUpdates;
    this._library.internalValue = config.library;
    this._notification.internalValue = config.notification;
    this._providerConfig.internalValue = config.providerConfig;
    this._restartWindow.internalValue = config.restartWindow;
    this._runAs.internalValue = config.runAs;
    this._timeouts.internalValue = config.timeouts;
    this._trigger.internalValue = config.trigger;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_duplicate_names - computed: false, optional: true, required: false
  private _allowDuplicateNames?: boolean | cdktn.IResolvable; 
  public get allowDuplicateNames() {
    return this.getBooleanAttribute('allow_duplicate_names');
  }
  public set allowDuplicateNames(value: boolean | cdktn.IResolvable) {
    this._allowDuplicateNames = value;
  }
  public resetAllowDuplicateNames() {
    this._allowDuplicateNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDuplicateNamesInput() {
    return this._allowDuplicateNames;
  }

  // budget_policy_id - computed: false, optional: true, required: false
  private _budgetPolicyId?: string; 
  public get budgetPolicyId() {
    return this.getStringAttribute('budget_policy_id');
  }
  public set budgetPolicyId(value: string) {
    this._budgetPolicyId = value;
  }
  public resetBudgetPolicyId() {
    this._budgetPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetPolicyIdInput() {
    return this._budgetPolicyId;
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // cause - computed: true, optional: true, required: false
  private _cause?: string; 
  public get cause() {
    return this.getStringAttribute('cause');
  }
  public set cause(value: string) {
    this._cause = value;
  }
  public resetCause() {
    this._cause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get causeInput() {
    return this._cause;
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // continuous - computed: false, optional: true, required: false
  private _continuous?: boolean | cdktn.IResolvable; 
  public get continuous() {
    return this.getBooleanAttribute('continuous');
  }
  public set continuous(value: boolean | cdktn.IResolvable) {
    this._continuous = value;
  }
  public resetContinuous() {
    this._continuous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousInput() {
    return this._continuous;
  }

  // creator_user_name - computed: true, optional: true, required: false
  private _creatorUserName?: string; 
  public get creatorUserName() {
    return this.getStringAttribute('creator_user_name');
  }
  public set creatorUserName(value: string) {
    this._creatorUserName = value;
  }
  public resetCreatorUserName() {
    this._creatorUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creatorUserNameInput() {
    return this._creatorUserName;
  }

  // development - computed: false, optional: true, required: false
  private _development?: boolean | cdktn.IResolvable; 
  public get development() {
    return this.getBooleanAttribute('development');
  }
  public set development(value: boolean | cdktn.IResolvable) {
    this._development = value;
  }
  public resetDevelopment() {
    this._development = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developmentInput() {
    return this._development;
  }

  // edition - computed: false, optional: true, required: false
  private _edition?: string; 
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  public resetEdition() {
    this._edition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition;
  }

  // expected_last_modified - computed: false, optional: true, required: false
  private _expectedLastModified?: number; 
  public get expectedLastModified() {
    return this.getNumberAttribute('expected_last_modified');
  }
  public set expectedLastModified(value: number) {
    this._expectedLastModified = value;
  }
  public resetExpectedLastModified() {
    this._expectedLastModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedLastModifiedInput() {
    return this._expectedLastModified;
  }

  // health - computed: true, optional: true, required: false
  private _health?: string; 
  public get health() {
    return this.getStringAttribute('health');
  }
  public set health(value: string) {
    this._health = value;
  }
  public resetHealth() {
    this._health = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_modified - computed: true, optional: true, required: false
  private _lastModified?: number; 
  public get lastModified() {
    return this.getNumberAttribute('last_modified');
  }
  public set lastModified(value: number) {
    this._lastModified = value;
  }
  public resetLastModified() {
    this._lastModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastModifiedInput() {
    return this._lastModified;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // photon - computed: false, optional: true, required: false
  private _photon?: boolean | cdktn.IResolvable; 
  public get photon() {
    return this.getBooleanAttribute('photon');
  }
  public set photon(value: boolean | cdktn.IResolvable) {
    this._photon = value;
  }
  public resetPhoton() {
    this._photon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get photonInput() {
    return this._photon;
  }

  // root_path - computed: false, optional: true, required: false
  private _rootPath?: string; 
  public get rootPath() {
    return this.getStringAttribute('root_path');
  }
  public set rootPath(value: string) {
    this._rootPath = value;
  }
  public resetRootPath() {
    this._rootPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPathInput() {
    return this._rootPath;
  }

  // run_as_user_name - computed: true, optional: true, required: false
  private _runAsUserName?: string; 
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }
  public set runAsUserName(value: string) {
    this._runAsUserName = value;
  }
  public resetRunAsUserName() {
    this._runAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserNameInput() {
    return this._runAsUserName;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // serverless - computed: false, optional: true, required: false
  private _serverless?: boolean | cdktn.IResolvable; 
  public get serverless() {
    return this.getBooleanAttribute('serverless');
  }
  public set serverless(value: boolean | cdktn.IResolvable) {
    this._serverless = value;
  }
  public resetServerless() {
    this._serverless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessInput() {
    return this._serverless;
  }

  // serverless_compute_id - computed: false, optional: true, required: false
  private _serverlessComputeId?: string; 
  public get serverlessComputeId() {
    return this.getStringAttribute('serverless_compute_id');
  }
  public set serverlessComputeId(value: string) {
    this._serverlessComputeId = value;
  }
  public resetServerlessComputeId() {
    this._serverlessComputeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessComputeIdInput() {
    return this._serverlessComputeId;
  }

  // state - computed: true, optional: true, required: false
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

  // storage - computed: false, optional: true, required: false
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // usage_policy_id - computed: false, optional: true, required: false
  private _usagePolicyId?: string; 
  public get usagePolicyId() {
    return this.getStringAttribute('usage_policy_id');
  }
  public set usagePolicyId(value: string) {
    this._usagePolicyId = value;
  }
  public resetUsagePolicyId() {
    this._usagePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usagePolicyIdInput() {
    return this._usagePolicyId;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new PipelineClusterList(this, "cluster", false);
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: PipelineCluster[] | cdktn.IResolvable) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment = new PipelineDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: PipelineDeployment) {
    this._deployment.internalValue = value;
  }
  public resetDeployment() {
    this._deployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new PipelineEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: PipelineEnvironment) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // event_log - computed: false, optional: true, required: false
  private _eventLog = new PipelineEventLogOutputReference(this, "event_log");
  public get eventLog() {
    return this._eventLog;
  }
  public putEventLog(value: PipelineEventLog) {
    this._eventLog.internalValue = value;
  }
  public resetEventLog() {
    this._eventLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventLogInput() {
    return this._eventLog.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new PipelineFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: PipelineFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // gateway_definition - computed: false, optional: true, required: false
  private _gatewayDefinition = new PipelineGatewayDefinitionOutputReference(this, "gateway_definition");
  public get gatewayDefinition() {
    return this._gatewayDefinition;
  }
  public putGatewayDefinition(value: PipelineGatewayDefinition) {
    this._gatewayDefinition.internalValue = value;
  }
  public resetGatewayDefinition() {
    this._gatewayDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayDefinitionInput() {
    return this._gatewayDefinition.internalValue;
  }

  // ingestion_definition - computed: false, optional: true, required: false
  private _ingestionDefinition = new PipelineIngestionDefinitionOutputReference(this, "ingestion_definition");
  public get ingestionDefinition() {
    return this._ingestionDefinition;
  }
  public putIngestionDefinition(value: PipelineIngestionDefinition) {
    this._ingestionDefinition.internalValue = value;
  }
  public resetIngestionDefinition() {
    this._ingestionDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionDefinitionInput() {
    return this._ingestionDefinition.internalValue;
  }

  // latest_updates - computed: false, optional: true, required: false
  private _latestUpdates = new PipelineLatestUpdatesList(this, "latest_updates", false);
  public get latestUpdates() {
    return this._latestUpdates;
  }
  public putLatestUpdates(value: PipelineLatestUpdates[] | cdktn.IResolvable) {
    this._latestUpdates.internalValue = value;
  }
  public resetLatestUpdates() {
    this._latestUpdates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestUpdatesInput() {
    return this._latestUpdates.internalValue;
  }

  // library - computed: false, optional: true, required: false
  private _library = new PipelineLibraryList(this, "library", false);
  public get library() {
    return this._library;
  }
  public putLibrary(value: PipelineLibrary[] | cdktn.IResolvable) {
    this._library.internalValue = value;
  }
  public resetLibrary() {
    this._library.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryInput() {
    return this._library.internalValue;
  }

  // notification - computed: false, optional: true, required: false
  private _notification = new PipelineNotificationList(this, "notification", false);
  public get notification() {
    return this._notification;
  }
  public putNotification(value: PipelineNotification[] | cdktn.IResolvable) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new PipelineProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: PipelineProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // restart_window - computed: false, optional: true, required: false
  private _restartWindow = new PipelineRestartWindowOutputReference(this, "restart_window");
  public get restartWindow() {
    return this._restartWindow;
  }
  public putRestartWindow(value: PipelineRestartWindow) {
    this._restartWindow.internalValue = value;
  }
  public resetRestartWindow() {
    this._restartWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartWindowInput() {
    return this._restartWindow.internalValue;
  }

  // run_as - computed: false, optional: true, required: false
  private _runAs = new PipelineRunAsOutputReference(this, "run_as");
  public get runAs() {
    return this._runAs;
  }
  public putRunAs(value: PipelineRunAs) {
    this._runAs.internalValue = value;
  }
  public resetRunAs() {
    this._runAs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsInput() {
    return this._runAs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PipelineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PipelineTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // trigger - computed: false, optional: true, required: false
  private _trigger = new PipelineTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: PipelineTrigger) {
    this._trigger.internalValue = value;
  }
  public resetTrigger() {
    this._trigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_duplicate_names: cdktn.booleanToTerraform(this._allowDuplicateNames),
      budget_policy_id: cdktn.stringToTerraform(this._budgetPolicyId),
      catalog: cdktn.stringToTerraform(this._catalog),
      cause: cdktn.stringToTerraform(this._cause),
      channel: cdktn.stringToTerraform(this._channel),
      cluster_id: cdktn.stringToTerraform(this._clusterId),
      configuration: cdktn.hashMapper(cdktn.stringToTerraform)(this._configuration),
      continuous: cdktn.booleanToTerraform(this._continuous),
      creator_user_name: cdktn.stringToTerraform(this._creatorUserName),
      development: cdktn.booleanToTerraform(this._development),
      edition: cdktn.stringToTerraform(this._edition),
      expected_last_modified: cdktn.numberToTerraform(this._expectedLastModified),
      health: cdktn.stringToTerraform(this._health),
      id: cdktn.stringToTerraform(this._id),
      last_modified: cdktn.numberToTerraform(this._lastModified),
      name: cdktn.stringToTerraform(this._name),
      photon: cdktn.booleanToTerraform(this._photon),
      root_path: cdktn.stringToTerraform(this._rootPath),
      run_as_user_name: cdktn.stringToTerraform(this._runAsUserName),
      schema: cdktn.stringToTerraform(this._schema),
      serverless: cdktn.booleanToTerraform(this._serverless),
      serverless_compute_id: cdktn.stringToTerraform(this._serverlessComputeId),
      state: cdktn.stringToTerraform(this._state),
      storage: cdktn.stringToTerraform(this._storage),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      target: cdktn.stringToTerraform(this._target),
      url: cdktn.stringToTerraform(this._url),
      usage_policy_id: cdktn.stringToTerraform(this._usagePolicyId),
      cluster: cdktn.listMapper(pipelineClusterToTerraform, true)(this._cluster.internalValue),
      deployment: pipelineDeploymentToTerraform(this._deployment.internalValue),
      environment: pipelineEnvironmentToTerraform(this._environment.internalValue),
      event_log: pipelineEventLogToTerraform(this._eventLog.internalValue),
      filters: pipelineFiltersToTerraform(this._filters.internalValue),
      gateway_definition: pipelineGatewayDefinitionToTerraform(this._gatewayDefinition.internalValue),
      ingestion_definition: pipelineIngestionDefinitionToTerraform(this._ingestionDefinition.internalValue),
      latest_updates: cdktn.listMapper(pipelineLatestUpdatesToTerraform, true)(this._latestUpdates.internalValue),
      library: cdktn.listMapper(pipelineLibraryToTerraform, true)(this._library.internalValue),
      notification: cdktn.listMapper(pipelineNotificationToTerraform, true)(this._notification.internalValue),
      provider_config: pipelineProviderConfigToTerraform(this._providerConfig.internalValue),
      restart_window: pipelineRestartWindowToTerraform(this._restartWindow.internalValue),
      run_as: pipelineRunAsToTerraform(this._runAs.internalValue),
      timeouts: pipelineTimeoutsToTerraform(this._timeouts.internalValue),
      trigger: pipelineTriggerToTerraform(this._trigger.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_duplicate_names: {
        value: cdktn.booleanToHclTerraform(this._allowDuplicateNames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      budget_policy_id: {
        value: cdktn.stringToHclTerraform(this._budgetPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catalog: {
        value: cdktn.stringToHclTerraform(this._catalog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cause: {
        value: cdktn.stringToHclTerraform(this._cause),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channel: {
        value: cdktn.stringToHclTerraform(this._channel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktn.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._configuration),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      continuous: {
        value: cdktn.booleanToHclTerraform(this._continuous),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      creator_user_name: {
        value: cdktn.stringToHclTerraform(this._creatorUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      development: {
        value: cdktn.booleanToHclTerraform(this._development),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      edition: {
        value: cdktn.stringToHclTerraform(this._edition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expected_last_modified: {
        value: cdktn.numberToHclTerraform(this._expectedLastModified),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health: {
        value: cdktn.stringToHclTerraform(this._health),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_modified: {
        value: cdktn.numberToHclTerraform(this._lastModified),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      photon: {
        value: cdktn.booleanToHclTerraform(this._photon),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      root_path: {
        value: cdktn.stringToHclTerraform(this._rootPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_as_user_name: {
        value: cdktn.stringToHclTerraform(this._runAsUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: cdktn.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serverless: {
        value: cdktn.booleanToHclTerraform(this._serverless),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      serverless_compute_id: {
        value: cdktn.stringToHclTerraform(this._serverlessComputeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktn.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage: {
        value: cdktn.stringToHclTerraform(this._storage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      target: {
        value: cdktn.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktn.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usage_policy_id: {
        value: cdktn.stringToHclTerraform(this._usagePolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster: {
        value: cdktn.listMapperHcl(pipelineClusterToHclTerraform, true)(this._cluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineClusterList",
      },
      deployment: {
        value: pipelineDeploymentToHclTerraform(this._deployment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineDeploymentList",
      },
      environment: {
        value: pipelineEnvironmentToHclTerraform(this._environment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineEnvironmentList",
      },
      event_log: {
        value: pipelineEventLogToHclTerraform(this._eventLog.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineEventLogList",
      },
      filters: {
        value: pipelineFiltersToHclTerraform(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineFiltersList",
      },
      gateway_definition: {
        value: pipelineGatewayDefinitionToHclTerraform(this._gatewayDefinition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineGatewayDefinitionList",
      },
      ingestion_definition: {
        value: pipelineIngestionDefinitionToHclTerraform(this._ingestionDefinition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineIngestionDefinitionList",
      },
      latest_updates: {
        value: cdktn.listMapperHcl(pipelineLatestUpdatesToHclTerraform, true)(this._latestUpdates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineLatestUpdatesList",
      },
      library: {
        value: cdktn.listMapperHcl(pipelineLibraryToHclTerraform, true)(this._library.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineLibraryList",
      },
      notification: {
        value: cdktn.listMapperHcl(pipelineNotificationToHclTerraform, true)(this._notification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineNotificationList",
      },
      provider_config: {
        value: pipelineProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineProviderConfigList",
      },
      restart_window: {
        value: pipelineRestartWindowToHclTerraform(this._restartWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineRestartWindowList",
      },
      run_as: {
        value: pipelineRunAsToHclTerraform(this._runAs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineRunAsList",
      },
      timeouts: {
        value: pipelineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PipelineTimeouts",
      },
      trigger: {
        value: pipelineTriggerToHclTerraform(this._trigger.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineTriggerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
