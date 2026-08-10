# `featureEngineeringKafkaConfig` Submodule <a name="`featureEngineeringKafkaConfig` Submodule" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FeatureEngineeringKafkaConfig <a name="FeatureEngineeringKafkaConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config databricks_feature_engineering_kafka_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auth_config: FeatureEngineeringKafkaConfigAuthConfig,
  bootstrap_servers: str,
  subscription_mode: FeatureEngineeringKafkaConfigSubscriptionMode,
  backfill_source: FeatureEngineeringKafkaConfigBackfillSource = None,
  extra_options: typing.Mapping[str] = None,
  ingestion_config: FeatureEngineeringKafkaConfigIngestionConfig = None,
  key_schema: FeatureEngineeringKafkaConfigKeySchema = None,
  provider_config: FeatureEngineeringKafkaConfigProviderConfig = None,
  value_schema: FeatureEngineeringKafkaConfigValueSchema = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.authConfig">auth_config</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#auth_config FeatureEngineeringKafkaConfig#auth_config}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.bootstrapServers">bootstrap_servers</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#bootstrap_servers FeatureEngineeringKafkaConfig#bootstrap_servers}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.subscriptionMode">subscription_mode</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#subscription_mode FeatureEngineeringKafkaConfig#subscription_mode}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.backfillSource">backfill_source</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#backfill_source FeatureEngineeringKafkaConfig#backfill_source}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.extraOptions">extra_options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#extra_options FeatureEngineeringKafkaConfig#extra_options}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.ingestionConfig">ingestion_config</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig">FeatureEngineeringKafkaConfigIngestionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#ingestion_config FeatureEngineeringKafkaConfig#ingestion_config}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.keySchema">key_schema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#key_schema FeatureEngineeringKafkaConfig#key_schema}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#provider_config FeatureEngineeringKafkaConfig#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.valueSchema">value_schema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#value_schema FeatureEngineeringKafkaConfig#value_schema}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auth_config`<sup>Required</sup> <a name="auth_config" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.authConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#auth_config FeatureEngineeringKafkaConfig#auth_config}.

---

##### `bootstrap_servers`<sup>Required</sup> <a name="bootstrap_servers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.bootstrapServers"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#bootstrap_servers FeatureEngineeringKafkaConfig#bootstrap_servers}.

---

##### `subscription_mode`<sup>Required</sup> <a name="subscription_mode" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.subscriptionMode"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#subscription_mode FeatureEngineeringKafkaConfig#subscription_mode}.

---

##### `backfill_source`<sup>Optional</sup> <a name="backfill_source" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.backfillSource"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#backfill_source FeatureEngineeringKafkaConfig#backfill_source}.

---

##### `extra_options`<sup>Optional</sup> <a name="extra_options" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.extraOptions"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#extra_options FeatureEngineeringKafkaConfig#extra_options}.

---

##### `ingestion_config`<sup>Optional</sup> <a name="ingestion_config" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.ingestionConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig">FeatureEngineeringKafkaConfigIngestionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#ingestion_config FeatureEngineeringKafkaConfig#ingestion_config}.

---

##### `key_schema`<sup>Optional</sup> <a name="key_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.keySchema"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#key_schema FeatureEngineeringKafkaConfig#key_schema}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#provider_config FeatureEngineeringKafkaConfig#provider_config}.

---

##### `value_schema`<sup>Optional</sup> <a name="value_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.valueSchema"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#value_schema FeatureEngineeringKafkaConfig#value_schema}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putAuthConfig">put_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putBackfillSource">put_backfill_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putIngestionConfig">put_ingestion_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putKeySchema">put_key_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putSubscriptionMode">put_subscription_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putValueSchema">put_value_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetBackfillSource">reset_backfill_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetExtraOptions">reset_extra_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetIngestionConfig">reset_ingestion_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetKeySchema">reset_key_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetValueSchema">reset_value_schema</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auth_config` <a name="put_auth_config" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putAuthConfig"></a>

```python
def put_auth_config(
  mtls_config: FeatureEngineeringKafkaConfigAuthConfigMtlsConfig = None,
  uc_service_credential_name: str = None
) -> None
```

###### `mtls_config`<sup>Optional</sup> <a name="mtls_config" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putAuthConfig.parameter.mtlsConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig">FeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#mtls_config FeatureEngineeringKafkaConfig#mtls_config}.

---

###### `uc_service_credential_name`<sup>Optional</sup> <a name="uc_service_credential_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putAuthConfig.parameter.ucServiceCredentialName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#uc_service_credential_name FeatureEngineeringKafkaConfig#uc_service_credential_name}.

---

##### `put_backfill_source` <a name="put_backfill_source" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putBackfillSource"></a>

```python
def put_backfill_source(
  delta_table_name: str = None,
  delta_table_source: FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource = None
) -> None
```

###### `delta_table_name`<sup>Optional</sup> <a name="delta_table_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putBackfillSource.parameter.deltaTableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#delta_table_name FeatureEngineeringKafkaConfig#delta_table_name}.

---

###### `delta_table_source`<sup>Optional</sup> <a name="delta_table_source" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putBackfillSource.parameter.deltaTableSource"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#delta_table_source FeatureEngineeringKafkaConfig#delta_table_source}.

---

##### `put_ingestion_config` <a name="put_ingestion_config" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putIngestionConfig"></a>

```python
def put_ingestion_config(
  ingestion_destination: FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination,
  backfill_source: FeatureEngineeringKafkaConfigIngestionConfigBackfillSource = None,
  deduplication_columns: typing.List[str] = None
) -> None
```

###### `ingestion_destination`<sup>Required</sup> <a name="ingestion_destination" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putIngestionConfig.parameter.ingestionDestination"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#ingestion_destination FeatureEngineeringKafkaConfig#ingestion_destination}.

---

###### `backfill_source`<sup>Optional</sup> <a name="backfill_source" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putIngestionConfig.parameter.backfillSource"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#backfill_source FeatureEngineeringKafkaConfig#backfill_source}.

---

###### `deduplication_columns`<sup>Optional</sup> <a name="deduplication_columns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putIngestionConfig.parameter.deduplicationColumns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#deduplication_columns FeatureEngineeringKafkaConfig#deduplication_columns}.

---

##### `put_key_schema` <a name="put_key_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putKeySchema"></a>

```python
def put_key_schema(
  avro_schema: str = None,
  json_schema: str = None,
  proto_schema: FeatureEngineeringKafkaConfigKeySchemaProtoSchema = None
) -> None
```

###### `avro_schema`<sup>Optional</sup> <a name="avro_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putKeySchema.parameter.avroSchema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#avro_schema FeatureEngineeringKafkaConfig#avro_schema}.

---

###### `json_schema`<sup>Optional</sup> <a name="json_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putKeySchema.parameter.jsonSchema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}.

---

###### `proto_schema`<sup>Optional</sup> <a name="proto_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putKeySchema.parameter.protoSchema"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema">FeatureEngineeringKafkaConfigKeySchemaProtoSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#proto_schema FeatureEngineeringKafkaConfig#proto_schema}.

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#workspace_id FeatureEngineeringKafkaConfig#workspace_id}.

---

##### `put_subscription_mode` <a name="put_subscription_mode" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putSubscriptionMode"></a>

```python
def put_subscription_mode(
  assign: str = None,
  subscribe: str = None,
  subscribe_pattern: str = None
) -> None
```

###### `assign`<sup>Optional</sup> <a name="assign" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putSubscriptionMode.parameter.assign"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#assign FeatureEngineeringKafkaConfig#assign}.

---

###### `subscribe`<sup>Optional</sup> <a name="subscribe" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putSubscriptionMode.parameter.subscribe"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#subscribe FeatureEngineeringKafkaConfig#subscribe}.

---

###### `subscribe_pattern`<sup>Optional</sup> <a name="subscribe_pattern" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putSubscriptionMode.parameter.subscribePattern"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#subscribe_pattern FeatureEngineeringKafkaConfig#subscribe_pattern}.

---

##### `put_value_schema` <a name="put_value_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putValueSchema"></a>

```python
def put_value_schema(
  avro_schema: str = None,
  json_schema: str = None,
  proto_schema: FeatureEngineeringKafkaConfigValueSchemaProtoSchema = None
) -> None
```

###### `avro_schema`<sup>Optional</sup> <a name="avro_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putValueSchema.parameter.avroSchema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#avro_schema FeatureEngineeringKafkaConfig#avro_schema}.

---

###### `json_schema`<sup>Optional</sup> <a name="json_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putValueSchema.parameter.jsonSchema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}.

---

###### `proto_schema`<sup>Optional</sup> <a name="proto_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putValueSchema.parameter.protoSchema"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema">FeatureEngineeringKafkaConfigValueSchemaProtoSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#proto_schema FeatureEngineeringKafkaConfig#proto_schema}.

---

##### `reset_backfill_source` <a name="reset_backfill_source" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetBackfillSource"></a>

```python
def reset_backfill_source() -> None
```

##### `reset_extra_options` <a name="reset_extra_options" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetExtraOptions"></a>

```python
def reset_extra_options() -> None
```

##### `reset_ingestion_config` <a name="reset_ingestion_config" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetIngestionConfig"></a>

```python
def reset_ingestion_config() -> None
```

##### `reset_key_schema` <a name="reset_key_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetKeySchema"></a>

```python
def reset_key_schema() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_value_schema` <a name="reset_value_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetValueSchema"></a>

```python
def reset_value_schema() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a FeatureEngineeringKafkaConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isConstruct"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformElement"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformResource"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a FeatureEngineeringKafkaConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FeatureEngineeringKafkaConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FeatureEngineeringKafkaConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FeatureEngineeringKafkaConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.authConfig">auth_config</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference">FeatureEngineeringKafkaConfigAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.backfillSource">backfill_source</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference">FeatureEngineeringKafkaConfigBackfillSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.ingestionConfig">ingestion_config</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference">FeatureEngineeringKafkaConfigIngestionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.keySchema">key_schema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference">FeatureEngineeringKafkaConfigKeySchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference">FeatureEngineeringKafkaConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.subscriptionMode">subscription_mode</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference">FeatureEngineeringKafkaConfigSubscriptionModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.valueSchema">value_schema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference">FeatureEngineeringKafkaConfigValueSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.authConfigInput">auth_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.backfillSourceInput">backfill_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.bootstrapServersInput">bootstrap_servers_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.extraOptionsInput">extra_options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.ingestionConfigInput">ingestion_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig">FeatureEngineeringKafkaConfigIngestionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.keySchemaInput">key_schema_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.subscriptionModeInput">subscription_mode_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.valueSchemaInput">value_schema_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.bootstrapServers">bootstrap_servers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.extraOptions">extra_options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auth_config`<sup>Required</sup> <a name="auth_config" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.authConfig"></a>

```python
auth_config: FeatureEngineeringKafkaConfigAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference">FeatureEngineeringKafkaConfigAuthConfigOutputReference</a>

---

##### `backfill_source`<sup>Required</sup> <a name="backfill_source" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.backfillSource"></a>

```python
backfill_source: FeatureEngineeringKafkaConfigBackfillSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference">FeatureEngineeringKafkaConfigBackfillSourceOutputReference</a>

---

##### `ingestion_config`<sup>Required</sup> <a name="ingestion_config" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.ingestionConfig"></a>

```python
ingestion_config: FeatureEngineeringKafkaConfigIngestionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference">FeatureEngineeringKafkaConfigIngestionConfigOutputReference</a>

---

##### `key_schema`<sup>Required</sup> <a name="key_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.keySchema"></a>

```python
key_schema: FeatureEngineeringKafkaConfigKeySchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference">FeatureEngineeringKafkaConfigKeySchemaOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.providerConfig"></a>

```python
provider_config: FeatureEngineeringKafkaConfigProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference">FeatureEngineeringKafkaConfigProviderConfigOutputReference</a>

---

##### `subscription_mode`<sup>Required</sup> <a name="subscription_mode" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.subscriptionMode"></a>

```python
subscription_mode: FeatureEngineeringKafkaConfigSubscriptionModeOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference">FeatureEngineeringKafkaConfigSubscriptionModeOutputReference</a>

---

##### `value_schema`<sup>Required</sup> <a name="value_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.valueSchema"></a>

```python
value_schema: FeatureEngineeringKafkaConfigValueSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference">FeatureEngineeringKafkaConfigValueSchemaOutputReference</a>

---

##### `auth_config_input`<sup>Optional</sup> <a name="auth_config_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.authConfigInput"></a>

```python
auth_config_input: IResolvable | FeatureEngineeringKafkaConfigAuthConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a>

---

##### `backfill_source_input`<sup>Optional</sup> <a name="backfill_source_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.backfillSourceInput"></a>

```python
backfill_source_input: IResolvable | FeatureEngineeringKafkaConfigBackfillSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a>

---

##### `bootstrap_servers_input`<sup>Optional</sup> <a name="bootstrap_servers_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.bootstrapServersInput"></a>

```python
bootstrap_servers_input: str
```

- *Type:* str

---

##### `extra_options_input`<sup>Optional</sup> <a name="extra_options_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.extraOptionsInput"></a>

```python
extra_options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ingestion_config_input`<sup>Optional</sup> <a name="ingestion_config_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.ingestionConfigInput"></a>

```python
ingestion_config_input: IResolvable | FeatureEngineeringKafkaConfigIngestionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig">FeatureEngineeringKafkaConfigIngestionConfig</a>

---

##### `key_schema_input`<sup>Optional</sup> <a name="key_schema_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.keySchemaInput"></a>

```python
key_schema_input: IResolvable | FeatureEngineeringKafkaConfigKeySchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a>

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | FeatureEngineeringKafkaConfigProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a>

---

##### `subscription_mode_input`<sup>Optional</sup> <a name="subscription_mode_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.subscriptionModeInput"></a>

```python
subscription_mode_input: IResolvable | FeatureEngineeringKafkaConfigSubscriptionMode
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a>

---

##### `value_schema_input`<sup>Optional</sup> <a name="value_schema_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.valueSchemaInput"></a>

```python
value_schema_input: IResolvable | FeatureEngineeringKafkaConfigValueSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a>

---

##### `bootstrap_servers`<sup>Required</sup> <a name="bootstrap_servers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.bootstrapServers"></a>

```python
bootstrap_servers: str
```

- *Type:* str

---

##### `extra_options`<sup>Required</sup> <a name="extra_options" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.extraOptions"></a>

```python
extra_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FeatureEngineeringKafkaConfigAuthConfig <a name="FeatureEngineeringKafkaConfigAuthConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig(
  mtls_config: FeatureEngineeringKafkaConfigAuthConfigMtlsConfig = None,
  uc_service_credential_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig.property.mtlsConfig">mtls_config</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig">FeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#mtls_config FeatureEngineeringKafkaConfig#mtls_config}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig.property.ucServiceCredentialName">uc_service_credential_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#uc_service_credential_name FeatureEngineeringKafkaConfig#uc_service_credential_name}. |

---

##### `mtls_config`<sup>Optional</sup> <a name="mtls_config" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig.property.mtlsConfig"></a>

```python
mtls_config: FeatureEngineeringKafkaConfigAuthConfigMtlsConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig">FeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#mtls_config FeatureEngineeringKafkaConfig#mtls_config}.

---

##### `uc_service_credential_name`<sup>Optional</sup> <a name="uc_service_credential_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig.property.ucServiceCredentialName"></a>

```python
uc_service_credential_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#uc_service_credential_name FeatureEngineeringKafkaConfig#uc_service_credential_name}.

---

### FeatureEngineeringKafkaConfigAuthConfigMtlsConfig <a name="FeatureEngineeringKafkaConfigAuthConfigMtlsConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig(
  key_password_ref: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef,
  keystore_location: str,
  keystore_password_ref: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef,
  truststore_location: str,
  truststore_password_ref: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef,
  disable_hostname_verification: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.keyPasswordRef">key_password_ref</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#key_password_ref FeatureEngineeringKafkaConfig#key_password_ref}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.keystoreLocation">keystore_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#keystore_location FeatureEngineeringKafkaConfig#keystore_location}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.keystorePasswordRef">keystore_password_ref</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#keystore_password_ref FeatureEngineeringKafkaConfig#keystore_password_ref}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.truststoreLocation">truststore_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#truststore_location FeatureEngineeringKafkaConfig#truststore_location}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.truststorePasswordRef">truststore_password_ref</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#truststore_password_ref FeatureEngineeringKafkaConfig#truststore_password_ref}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.disableHostnameVerification">disable_hostname_verification</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#disable_hostname_verification FeatureEngineeringKafkaConfig#disable_hostname_verification}. |

---

##### `key_password_ref`<sup>Required</sup> <a name="key_password_ref" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.keyPasswordRef"></a>

```python
key_password_ref: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#key_password_ref FeatureEngineeringKafkaConfig#key_password_ref}.

---

##### `keystore_location`<sup>Required</sup> <a name="keystore_location" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.keystoreLocation"></a>

```python
keystore_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#keystore_location FeatureEngineeringKafkaConfig#keystore_location}.

---

##### `keystore_password_ref`<sup>Required</sup> <a name="keystore_password_ref" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.keystorePasswordRef"></a>

```python
keystore_password_ref: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#keystore_password_ref FeatureEngineeringKafkaConfig#keystore_password_ref}.

---

##### `truststore_location`<sup>Required</sup> <a name="truststore_location" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.truststoreLocation"></a>

```python
truststore_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#truststore_location FeatureEngineeringKafkaConfig#truststore_location}.

---

##### `truststore_password_ref`<sup>Required</sup> <a name="truststore_password_ref" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.truststorePasswordRef"></a>

```python
truststore_password_ref: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#truststore_password_ref FeatureEngineeringKafkaConfig#truststore_password_ref}.

---

##### `disable_hostname_verification`<sup>Optional</sup> <a name="disable_hostname_verification" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.disableHostnameVerification"></a>

```python
disable_hostname_verification: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#disable_hostname_verification FeatureEngineeringKafkaConfig#disable_hostname_verification}.

---

### FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef <a name="FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef(
  key: str,
  scope: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#key FeatureEngineeringKafkaConfig#key}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#scope FeatureEngineeringKafkaConfig#scope}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#key FeatureEngineeringKafkaConfig#key}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#scope FeatureEngineeringKafkaConfig#scope}.

---

### FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef <a name="FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef(
  key: str,
  scope: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#key FeatureEngineeringKafkaConfig#key}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#scope FeatureEngineeringKafkaConfig#scope}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#key FeatureEngineeringKafkaConfig#key}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#scope FeatureEngineeringKafkaConfig#scope}.

---

### FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef <a name="FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef(
  key: str,
  scope: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#key FeatureEngineeringKafkaConfig#key}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#scope FeatureEngineeringKafkaConfig#scope}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#key FeatureEngineeringKafkaConfig#key}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#scope FeatureEngineeringKafkaConfig#scope}.

---

### FeatureEngineeringKafkaConfigBackfillSource <a name="FeatureEngineeringKafkaConfigBackfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource(
  delta_table_name: str = None,
  delta_table_source: FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource.property.deltaTableName">delta_table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#delta_table_name FeatureEngineeringKafkaConfig#delta_table_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource.property.deltaTableSource">delta_table_source</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#delta_table_source FeatureEngineeringKafkaConfig#delta_table_source}. |

---

##### `delta_table_name`<sup>Optional</sup> <a name="delta_table_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource.property.deltaTableName"></a>

```python
delta_table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#delta_table_name FeatureEngineeringKafkaConfig#delta_table_name}.

---

##### `delta_table_source`<sup>Optional</sup> <a name="delta_table_source" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource.property.deltaTableSource"></a>

```python
delta_table_source: FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#delta_table_source FeatureEngineeringKafkaConfig#delta_table_source}.

---

### FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource <a name="FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource(
  full_name: str,
  dataframe_schema: str = None,
  entity_columns: typing.List[str] = None,
  filter_condition: str = None,
  timeseries_column: str = None,
  transformation_sql: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.fullName">full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#full_name FeatureEngineeringKafkaConfig#full_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.dataframeSchema">dataframe_schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#dataframe_schema FeatureEngineeringKafkaConfig#dataframe_schema}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.entityColumns">entity_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#entity_columns FeatureEngineeringKafkaConfig#entity_columns}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.filterCondition">filter_condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#filter_condition FeatureEngineeringKafkaConfig#filter_condition}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.timeseriesColumn">timeseries_column</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#timeseries_column FeatureEngineeringKafkaConfig#timeseries_column}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.transformationSql">transformation_sql</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#transformation_sql FeatureEngineeringKafkaConfig#transformation_sql}. |

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#full_name FeatureEngineeringKafkaConfig#full_name}.

---

##### `dataframe_schema`<sup>Optional</sup> <a name="dataframe_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.dataframeSchema"></a>

```python
dataframe_schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#dataframe_schema FeatureEngineeringKafkaConfig#dataframe_schema}.

---

##### `entity_columns`<sup>Optional</sup> <a name="entity_columns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.entityColumns"></a>

```python
entity_columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#entity_columns FeatureEngineeringKafkaConfig#entity_columns}.

---

##### `filter_condition`<sup>Optional</sup> <a name="filter_condition" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.filterCondition"></a>

```python
filter_condition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#filter_condition FeatureEngineeringKafkaConfig#filter_condition}.

---

##### `timeseries_column`<sup>Optional</sup> <a name="timeseries_column" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.timeseriesColumn"></a>

```python
timeseries_column: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#timeseries_column FeatureEngineeringKafkaConfig#timeseries_column}.

---

##### `transformation_sql`<sup>Optional</sup> <a name="transformation_sql" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.transformationSql"></a>

```python
transformation_sql: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#transformation_sql FeatureEngineeringKafkaConfig#transformation_sql}.

---

### FeatureEngineeringKafkaConfigConfig <a name="FeatureEngineeringKafkaConfigConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auth_config: FeatureEngineeringKafkaConfigAuthConfig,
  bootstrap_servers: str,
  subscription_mode: FeatureEngineeringKafkaConfigSubscriptionMode,
  backfill_source: FeatureEngineeringKafkaConfigBackfillSource = None,
  extra_options: typing.Mapping[str] = None,
  ingestion_config: FeatureEngineeringKafkaConfigIngestionConfig = None,
  key_schema: FeatureEngineeringKafkaConfigKeySchema = None,
  provider_config: FeatureEngineeringKafkaConfigProviderConfig = None,
  value_schema: FeatureEngineeringKafkaConfigValueSchema = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.authConfig">auth_config</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#auth_config FeatureEngineeringKafkaConfig#auth_config}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.bootstrapServers">bootstrap_servers</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#bootstrap_servers FeatureEngineeringKafkaConfig#bootstrap_servers}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.subscriptionMode">subscription_mode</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#subscription_mode FeatureEngineeringKafkaConfig#subscription_mode}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.backfillSource">backfill_source</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#backfill_source FeatureEngineeringKafkaConfig#backfill_source}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.extraOptions">extra_options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#extra_options FeatureEngineeringKafkaConfig#extra_options}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.ingestionConfig">ingestion_config</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig">FeatureEngineeringKafkaConfigIngestionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#ingestion_config FeatureEngineeringKafkaConfig#ingestion_config}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.keySchema">key_schema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#key_schema FeatureEngineeringKafkaConfig#key_schema}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#provider_config FeatureEngineeringKafkaConfig#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.valueSchema">value_schema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#value_schema FeatureEngineeringKafkaConfig#value_schema}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auth_config`<sup>Required</sup> <a name="auth_config" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.authConfig"></a>

```python
auth_config: FeatureEngineeringKafkaConfigAuthConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#auth_config FeatureEngineeringKafkaConfig#auth_config}.

---

##### `bootstrap_servers`<sup>Required</sup> <a name="bootstrap_servers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.bootstrapServers"></a>

```python
bootstrap_servers: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#bootstrap_servers FeatureEngineeringKafkaConfig#bootstrap_servers}.

---

##### `subscription_mode`<sup>Required</sup> <a name="subscription_mode" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.subscriptionMode"></a>

```python
subscription_mode: FeatureEngineeringKafkaConfigSubscriptionMode
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#subscription_mode FeatureEngineeringKafkaConfig#subscription_mode}.

---

##### `backfill_source`<sup>Optional</sup> <a name="backfill_source" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.backfillSource"></a>

```python
backfill_source: FeatureEngineeringKafkaConfigBackfillSource
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#backfill_source FeatureEngineeringKafkaConfig#backfill_source}.

---

##### `extra_options`<sup>Optional</sup> <a name="extra_options" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.extraOptions"></a>

```python
extra_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#extra_options FeatureEngineeringKafkaConfig#extra_options}.

---

##### `ingestion_config`<sup>Optional</sup> <a name="ingestion_config" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.ingestionConfig"></a>

```python
ingestion_config: FeatureEngineeringKafkaConfigIngestionConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig">FeatureEngineeringKafkaConfigIngestionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#ingestion_config FeatureEngineeringKafkaConfig#ingestion_config}.

---

##### `key_schema`<sup>Optional</sup> <a name="key_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.keySchema"></a>

```python
key_schema: FeatureEngineeringKafkaConfigKeySchema
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#key_schema FeatureEngineeringKafkaConfig#key_schema}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.providerConfig"></a>

```python
provider_config: FeatureEngineeringKafkaConfigProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#provider_config FeatureEngineeringKafkaConfig#provider_config}.

---

##### `value_schema`<sup>Optional</sup> <a name="value_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.valueSchema"></a>

```python
value_schema: FeatureEngineeringKafkaConfigValueSchema
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#value_schema FeatureEngineeringKafkaConfig#value_schema}.

---

### FeatureEngineeringKafkaConfigIngestionConfig <a name="FeatureEngineeringKafkaConfigIngestionConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig(
  ingestion_destination: FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination,
  backfill_source: FeatureEngineeringKafkaConfigIngestionConfigBackfillSource = None,
  deduplication_columns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig.property.ingestionDestination">ingestion_destination</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#ingestion_destination FeatureEngineeringKafkaConfig#ingestion_destination}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig.property.backfillSource">backfill_source</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#backfill_source FeatureEngineeringKafkaConfig#backfill_source}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig.property.deduplicationColumns">deduplication_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#deduplication_columns FeatureEngineeringKafkaConfig#deduplication_columns}. |

---

##### `ingestion_destination`<sup>Required</sup> <a name="ingestion_destination" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig.property.ingestionDestination"></a>

```python
ingestion_destination: FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#ingestion_destination FeatureEngineeringKafkaConfig#ingestion_destination}.

---

##### `backfill_source`<sup>Optional</sup> <a name="backfill_source" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig.property.backfillSource"></a>

```python
backfill_source: FeatureEngineeringKafkaConfigIngestionConfigBackfillSource
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#backfill_source FeatureEngineeringKafkaConfig#backfill_source}.

---

##### `deduplication_columns`<sup>Optional</sup> <a name="deduplication_columns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig.property.deduplicationColumns"></a>

```python
deduplication_columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#deduplication_columns FeatureEngineeringKafkaConfig#deduplication_columns}.

---

### FeatureEngineeringKafkaConfigIngestionConfigBackfillSource <a name="FeatureEngineeringKafkaConfigIngestionConfigBackfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource(
  delta_table_name: str = None,
  delta_table_source: FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource.property.deltaTableName">delta_table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#delta_table_name FeatureEngineeringKafkaConfig#delta_table_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource.property.deltaTableSource">delta_table_source</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#delta_table_source FeatureEngineeringKafkaConfig#delta_table_source}. |

---

##### `delta_table_name`<sup>Optional</sup> <a name="delta_table_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource.property.deltaTableName"></a>

```python
delta_table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#delta_table_name FeatureEngineeringKafkaConfig#delta_table_name}.

---

##### `delta_table_source`<sup>Optional</sup> <a name="delta_table_source" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource.property.deltaTableSource"></a>

```python
delta_table_source: FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#delta_table_source FeatureEngineeringKafkaConfig#delta_table_source}.

---

### FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource <a name="FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource(
  full_name: str,
  dataframe_schema: str = None,
  entity_columns: typing.List[str] = None,
  filter_condition: str = None,
  timeseries_column: str = None,
  transformation_sql: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.fullName">full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#full_name FeatureEngineeringKafkaConfig#full_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.dataframeSchema">dataframe_schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#dataframe_schema FeatureEngineeringKafkaConfig#dataframe_schema}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.entityColumns">entity_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#entity_columns FeatureEngineeringKafkaConfig#entity_columns}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.filterCondition">filter_condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#filter_condition FeatureEngineeringKafkaConfig#filter_condition}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.timeseriesColumn">timeseries_column</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#timeseries_column FeatureEngineeringKafkaConfig#timeseries_column}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.transformationSql">transformation_sql</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#transformation_sql FeatureEngineeringKafkaConfig#transformation_sql}. |

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#full_name FeatureEngineeringKafkaConfig#full_name}.

---

##### `dataframe_schema`<sup>Optional</sup> <a name="dataframe_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.dataframeSchema"></a>

```python
dataframe_schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#dataframe_schema FeatureEngineeringKafkaConfig#dataframe_schema}.

---

##### `entity_columns`<sup>Optional</sup> <a name="entity_columns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.entityColumns"></a>

```python
entity_columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#entity_columns FeatureEngineeringKafkaConfig#entity_columns}.

---

##### `filter_condition`<sup>Optional</sup> <a name="filter_condition" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.filterCondition"></a>

```python
filter_condition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#filter_condition FeatureEngineeringKafkaConfig#filter_condition}.

---

##### `timeseries_column`<sup>Optional</sup> <a name="timeseries_column" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.timeseriesColumn"></a>

```python
timeseries_column: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#timeseries_column FeatureEngineeringKafkaConfig#timeseries_column}.

---

##### `transformation_sql`<sup>Optional</sup> <a name="transformation_sql" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.transformationSql"></a>

```python
transformation_sql: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#transformation_sql FeatureEngineeringKafkaConfig#transformation_sql}.

---

### FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination <a name="FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination(
  delta_table_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination.property.deltaTableName">delta_table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#delta_table_name FeatureEngineeringKafkaConfig#delta_table_name}. |

---

##### `delta_table_name`<sup>Optional</sup> <a name="delta_table_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination.property.deltaTableName"></a>

```python
delta_table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#delta_table_name FeatureEngineeringKafkaConfig#delta_table_name}.

---

### FeatureEngineeringKafkaConfigKeySchema <a name="FeatureEngineeringKafkaConfigKeySchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema(
  avro_schema: str = None,
  json_schema: str = None,
  proto_schema: FeatureEngineeringKafkaConfigKeySchemaProtoSchema = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema.property.avroSchema">avro_schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#avro_schema FeatureEngineeringKafkaConfig#avro_schema}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema.property.jsonSchema">json_schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema.property.protoSchema">proto_schema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema">FeatureEngineeringKafkaConfigKeySchemaProtoSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#proto_schema FeatureEngineeringKafkaConfig#proto_schema}. |

---

##### `avro_schema`<sup>Optional</sup> <a name="avro_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema.property.avroSchema"></a>

```python
avro_schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#avro_schema FeatureEngineeringKafkaConfig#avro_schema}.

---

##### `json_schema`<sup>Optional</sup> <a name="json_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema.property.jsonSchema"></a>

```python
json_schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}.

---

##### `proto_schema`<sup>Optional</sup> <a name="proto_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema.property.protoSchema"></a>

```python
proto_schema: FeatureEngineeringKafkaConfigKeySchemaProtoSchema
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema">FeatureEngineeringKafkaConfigKeySchemaProtoSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#proto_schema FeatureEngineeringKafkaConfig#proto_schema}.

---

### FeatureEngineeringKafkaConfigKeySchemaProtoSchema <a name="FeatureEngineeringKafkaConfigKeySchemaProtoSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema(
  message_name: str,
  schema_text: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema.property.messageName">message_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#message_name FeatureEngineeringKafkaConfig#message_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema.property.schemaText">schema_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#schema_text FeatureEngineeringKafkaConfig#schema_text}. |

---

##### `message_name`<sup>Required</sup> <a name="message_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema.property.messageName"></a>

```python
message_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#message_name FeatureEngineeringKafkaConfig#message_name}.

---

##### `schema_text`<sup>Required</sup> <a name="schema_text" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema.property.schemaText"></a>

```python
schema_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#schema_text FeatureEngineeringKafkaConfig#schema_text}.

---

### FeatureEngineeringKafkaConfigProviderConfig <a name="FeatureEngineeringKafkaConfigProviderConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#workspace_id FeatureEngineeringKafkaConfig#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#workspace_id FeatureEngineeringKafkaConfig#workspace_id}.

---

### FeatureEngineeringKafkaConfigSubscriptionMode <a name="FeatureEngineeringKafkaConfigSubscriptionMode" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode(
  assign: str = None,
  subscribe: str = None,
  subscribe_pattern: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.assign">assign</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#assign FeatureEngineeringKafkaConfig#assign}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.subscribe">subscribe</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#subscribe FeatureEngineeringKafkaConfig#subscribe}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.subscribePattern">subscribe_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#subscribe_pattern FeatureEngineeringKafkaConfig#subscribe_pattern}. |

---

##### `assign`<sup>Optional</sup> <a name="assign" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.assign"></a>

```python
assign: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#assign FeatureEngineeringKafkaConfig#assign}.

---

##### `subscribe`<sup>Optional</sup> <a name="subscribe" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.subscribe"></a>

```python
subscribe: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#subscribe FeatureEngineeringKafkaConfig#subscribe}.

---

##### `subscribe_pattern`<sup>Optional</sup> <a name="subscribe_pattern" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.subscribePattern"></a>

```python
subscribe_pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#subscribe_pattern FeatureEngineeringKafkaConfig#subscribe_pattern}.

---

### FeatureEngineeringKafkaConfigValueSchema <a name="FeatureEngineeringKafkaConfigValueSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema(
  avro_schema: str = None,
  json_schema: str = None,
  proto_schema: FeatureEngineeringKafkaConfigValueSchemaProtoSchema = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema.property.avroSchema">avro_schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#avro_schema FeatureEngineeringKafkaConfig#avro_schema}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema.property.jsonSchema">json_schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema.property.protoSchema">proto_schema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema">FeatureEngineeringKafkaConfigValueSchemaProtoSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#proto_schema FeatureEngineeringKafkaConfig#proto_schema}. |

---

##### `avro_schema`<sup>Optional</sup> <a name="avro_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema.property.avroSchema"></a>

```python
avro_schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#avro_schema FeatureEngineeringKafkaConfig#avro_schema}.

---

##### `json_schema`<sup>Optional</sup> <a name="json_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema.property.jsonSchema"></a>

```python
json_schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}.

---

##### `proto_schema`<sup>Optional</sup> <a name="proto_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema.property.protoSchema"></a>

```python
proto_schema: FeatureEngineeringKafkaConfigValueSchemaProtoSchema
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema">FeatureEngineeringKafkaConfigValueSchemaProtoSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#proto_schema FeatureEngineeringKafkaConfig#proto_schema}.

---

### FeatureEngineeringKafkaConfigValueSchemaProtoSchema <a name="FeatureEngineeringKafkaConfigValueSchemaProtoSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema(
  message_name: str,
  schema_text: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema.property.messageName">message_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#message_name FeatureEngineeringKafkaConfig#message_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema.property.schemaText">schema_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#schema_text FeatureEngineeringKafkaConfig#schema_text}. |

---

##### `message_name`<sup>Required</sup> <a name="message_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema.property.messageName"></a>

```python
message_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#message_name FeatureEngineeringKafkaConfig#message_name}.

---

##### `schema_text`<sup>Required</sup> <a name="schema_text" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema.property.schemaText"></a>

```python
schema_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#schema_text FeatureEngineeringKafkaConfig#schema_text}.

---

## Classes <a name="Classes" id="Classes"></a>

### FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference <a name="FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a>

---


### FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference <a name="FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a>

---


### FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference <a name="FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putKeyPasswordRef">put_key_password_ref</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putKeystorePasswordRef">put_keystore_password_ref</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putTruststorePasswordRef">put_truststore_password_ref</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.resetDisableHostnameVerification">reset_disable_hostname_verification</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_key_password_ref` <a name="put_key_password_ref" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putKeyPasswordRef"></a>

```python
def put_key_password_ref(
  key: str,
  scope: str
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putKeyPasswordRef.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#key FeatureEngineeringKafkaConfig#key}.

---

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putKeyPasswordRef.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#scope FeatureEngineeringKafkaConfig#scope}.

---

##### `put_keystore_password_ref` <a name="put_keystore_password_ref" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putKeystorePasswordRef"></a>

```python
def put_keystore_password_ref(
  key: str,
  scope: str
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putKeystorePasswordRef.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#key FeatureEngineeringKafkaConfig#key}.

---

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putKeystorePasswordRef.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#scope FeatureEngineeringKafkaConfig#scope}.

---

##### `put_truststore_password_ref` <a name="put_truststore_password_ref" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putTruststorePasswordRef"></a>

```python
def put_truststore_password_ref(
  key: str,
  scope: str
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putTruststorePasswordRef.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#key FeatureEngineeringKafkaConfig#key}.

---

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putTruststorePasswordRef.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#scope FeatureEngineeringKafkaConfig#scope}.

---

##### `reset_disable_hostname_verification` <a name="reset_disable_hostname_verification" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.resetDisableHostnameVerification"></a>

```python
def reset_disable_hostname_verification() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keyPasswordRef">key_password_ref</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystorePasswordRef">keystore_password_ref</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststorePasswordRef">truststore_password_ref</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.disableHostnameVerificationInput">disable_hostname_verification_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keyPasswordRefInput">key_password_ref_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystoreLocationInput">keystore_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystorePasswordRefInput">keystore_password_ref_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststoreLocationInput">truststore_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststorePasswordRefInput">truststore_password_ref_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.disableHostnameVerification">disable_hostname_verification</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystoreLocation">keystore_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststoreLocation">truststore_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig">FeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_password_ref`<sup>Required</sup> <a name="key_password_ref" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keyPasswordRef"></a>

```python
key_password_ref: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference</a>

---

##### `keystore_password_ref`<sup>Required</sup> <a name="keystore_password_ref" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystorePasswordRef"></a>

```python
keystore_password_ref: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference</a>

---

##### `truststore_password_ref`<sup>Required</sup> <a name="truststore_password_ref" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststorePasswordRef"></a>

```python
truststore_password_ref: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference</a>

---

##### `disable_hostname_verification_input`<sup>Optional</sup> <a name="disable_hostname_verification_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.disableHostnameVerificationInput"></a>

```python
disable_hostname_verification_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_password_ref_input`<sup>Optional</sup> <a name="key_password_ref_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keyPasswordRefInput"></a>

```python
key_password_ref_input: IResolvable | FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a>

---

##### `keystore_location_input`<sup>Optional</sup> <a name="keystore_location_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystoreLocationInput"></a>

```python
keystore_location_input: str
```

- *Type:* str

---

##### `keystore_password_ref_input`<sup>Optional</sup> <a name="keystore_password_ref_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystorePasswordRefInput"></a>

```python
keystore_password_ref_input: IResolvable | FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a>

---

##### `truststore_location_input`<sup>Optional</sup> <a name="truststore_location_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststoreLocationInput"></a>

```python
truststore_location_input: str
```

- *Type:* str

---

##### `truststore_password_ref_input`<sup>Optional</sup> <a name="truststore_password_ref_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststorePasswordRefInput"></a>

```python
truststore_password_ref_input: IResolvable | FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a>

---

##### `disable_hostname_verification`<sup>Required</sup> <a name="disable_hostname_verification" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.disableHostnameVerification"></a>

```python
disable_hostname_verification: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `keystore_location`<sup>Required</sup> <a name="keystore_location" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystoreLocation"></a>

```python
keystore_location: str
```

- *Type:* str

---

##### `truststore_location`<sup>Required</sup> <a name="truststore_location" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststoreLocation"></a>

```python
truststore_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FeatureEngineeringKafkaConfigAuthConfigMtlsConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig">FeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a>

---


### FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference <a name="FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a>

---


### FeatureEngineeringKafkaConfigAuthConfigOutputReference <a name="FeatureEngineeringKafkaConfigAuthConfigOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.putMtlsConfig">put_mtls_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resetMtlsConfig">reset_mtls_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resetUcServiceCredentialName">reset_uc_service_credential_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_mtls_config` <a name="put_mtls_config" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.putMtlsConfig"></a>

```python
def put_mtls_config(
  key_password_ref: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef,
  keystore_location: str,
  keystore_password_ref: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef,
  truststore_location: str,
  truststore_password_ref: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef,
  disable_hostname_verification: bool | IResolvable = None
) -> None
```

###### `key_password_ref`<sup>Required</sup> <a name="key_password_ref" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.putMtlsConfig.parameter.keyPasswordRef"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#key_password_ref FeatureEngineeringKafkaConfig#key_password_ref}.

---

###### `keystore_location`<sup>Required</sup> <a name="keystore_location" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.putMtlsConfig.parameter.keystoreLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#keystore_location FeatureEngineeringKafkaConfig#keystore_location}.

---

###### `keystore_password_ref`<sup>Required</sup> <a name="keystore_password_ref" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.putMtlsConfig.parameter.keystorePasswordRef"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#keystore_password_ref FeatureEngineeringKafkaConfig#keystore_password_ref}.

---

###### `truststore_location`<sup>Required</sup> <a name="truststore_location" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.putMtlsConfig.parameter.truststoreLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#truststore_location FeatureEngineeringKafkaConfig#truststore_location}.

---

###### `truststore_password_ref`<sup>Required</sup> <a name="truststore_password_ref" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.putMtlsConfig.parameter.truststorePasswordRef"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#truststore_password_ref FeatureEngineeringKafkaConfig#truststore_password_ref}.

---

###### `disable_hostname_verification`<sup>Optional</sup> <a name="disable_hostname_verification" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.putMtlsConfig.parameter.disableHostnameVerification"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#disable_hostname_verification FeatureEngineeringKafkaConfig#disable_hostname_verification}.

---

##### `reset_mtls_config` <a name="reset_mtls_config" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resetMtlsConfig"></a>

```python
def reset_mtls_config() -> None
```

##### `reset_uc_service_credential_name` <a name="reset_uc_service_credential_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resetUcServiceCredentialName"></a>

```python
def reset_uc_service_credential_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.mtlsConfig">mtls_config</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.mtlsConfigInput">mtls_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig">FeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialNameInput">uc_service_credential_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialName">uc_service_credential_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mtls_config`<sup>Required</sup> <a name="mtls_config" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.mtlsConfig"></a>

```python
mtls_config: FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference</a>

---

##### `mtls_config_input`<sup>Optional</sup> <a name="mtls_config_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.mtlsConfigInput"></a>

```python
mtls_config_input: IResolvable | FeatureEngineeringKafkaConfigAuthConfigMtlsConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig">FeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a>

---

##### `uc_service_credential_name_input`<sup>Optional</sup> <a name="uc_service_credential_name_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialNameInput"></a>

```python
uc_service_credential_name_input: str
```

- *Type:* str

---

##### `uc_service_credential_name`<sup>Required</sup> <a name="uc_service_credential_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialName"></a>

```python
uc_service_credential_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FeatureEngineeringKafkaConfigAuthConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a>

---


### FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference <a name="FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetDataframeSchema">reset_dataframe_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetEntityColumns">reset_entity_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetFilterCondition">reset_filter_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetTimeseriesColumn">reset_timeseries_column</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetTransformationSql">reset_transformation_sql</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataframe_schema` <a name="reset_dataframe_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetDataframeSchema"></a>

```python
def reset_dataframe_schema() -> None
```

##### `reset_entity_columns` <a name="reset_entity_columns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetEntityColumns"></a>

```python
def reset_entity_columns() -> None
```

##### `reset_filter_condition` <a name="reset_filter_condition" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetFilterCondition"></a>

```python
def reset_filter_condition() -> None
```

##### `reset_timeseries_column` <a name="reset_timeseries_column" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetTimeseriesColumn"></a>

```python
def reset_timeseries_column() -> None
```

##### `reset_transformation_sql` <a name="reset_transformation_sql" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetTransformationSql"></a>

```python
def reset_transformation_sql() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchemaInput">dataframe_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumnsInput">entity_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.filterConditionInput">filter_condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fullNameInput">full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput">timeseries_column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSqlInput">transformation_sql_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchema">dataframe_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumns">entity_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.filterCondition">filter_condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumn">timeseries_column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSql">transformation_sql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataframe_schema_input`<sup>Optional</sup> <a name="dataframe_schema_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchemaInput"></a>

```python
dataframe_schema_input: str
```

- *Type:* str

---

##### `entity_columns_input`<sup>Optional</sup> <a name="entity_columns_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumnsInput"></a>

```python
entity_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_condition_input`<sup>Optional</sup> <a name="filter_condition_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.filterConditionInput"></a>

```python
filter_condition_input: str
```

- *Type:* str

---

##### `full_name_input`<sup>Optional</sup> <a name="full_name_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fullNameInput"></a>

```python
full_name_input: str
```

- *Type:* str

---

##### `timeseries_column_input`<sup>Optional</sup> <a name="timeseries_column_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput"></a>

```python
timeseries_column_input: str
```

- *Type:* str

---

##### `transformation_sql_input`<sup>Optional</sup> <a name="transformation_sql_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSqlInput"></a>

```python
transformation_sql_input: str
```

- *Type:* str

---

##### `dataframe_schema`<sup>Required</sup> <a name="dataframe_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchema"></a>

```python
dataframe_schema: str
```

- *Type:* str

---

##### `entity_columns`<sup>Required</sup> <a name="entity_columns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumns"></a>

```python
entity_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_condition`<sup>Required</sup> <a name="filter_condition" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.filterCondition"></a>

```python
filter_condition: str
```

- *Type:* str

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `timeseries_column`<sup>Required</sup> <a name="timeseries_column" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumn"></a>

```python
timeseries_column: str
```

- *Type:* str

---

##### `transformation_sql`<sup>Required</sup> <a name="transformation_sql" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSql"></a>

```python
transformation_sql: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a>

---


### FeatureEngineeringKafkaConfigBackfillSourceOutputReference <a name="FeatureEngineeringKafkaConfigBackfillSourceOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.putDeltaTableSource">put_delta_table_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.resetDeltaTableName">reset_delta_table_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.resetDeltaTableSource">reset_delta_table_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_delta_table_source` <a name="put_delta_table_source" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.putDeltaTableSource"></a>

```python
def put_delta_table_source(
  full_name: str,
  dataframe_schema: str = None,
  entity_columns: typing.List[str] = None,
  filter_condition: str = None,
  timeseries_column: str = None,
  transformation_sql: str = None
) -> None
```

###### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.putDeltaTableSource.parameter.fullName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#full_name FeatureEngineeringKafkaConfig#full_name}.

---

###### `dataframe_schema`<sup>Optional</sup> <a name="dataframe_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.putDeltaTableSource.parameter.dataframeSchema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#dataframe_schema FeatureEngineeringKafkaConfig#dataframe_schema}.

---

###### `entity_columns`<sup>Optional</sup> <a name="entity_columns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.putDeltaTableSource.parameter.entityColumns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#entity_columns FeatureEngineeringKafkaConfig#entity_columns}.

---

###### `filter_condition`<sup>Optional</sup> <a name="filter_condition" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.putDeltaTableSource.parameter.filterCondition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#filter_condition FeatureEngineeringKafkaConfig#filter_condition}.

---

###### `timeseries_column`<sup>Optional</sup> <a name="timeseries_column" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.putDeltaTableSource.parameter.timeseriesColumn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#timeseries_column FeatureEngineeringKafkaConfig#timeseries_column}.

---

###### `transformation_sql`<sup>Optional</sup> <a name="transformation_sql" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.putDeltaTableSource.parameter.transformationSql"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#transformation_sql FeatureEngineeringKafkaConfig#transformation_sql}.

---

##### `reset_delta_table_name` <a name="reset_delta_table_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.resetDeltaTableName"></a>

```python
def reset_delta_table_name() -> None
```

##### `reset_delta_table_source` <a name="reset_delta_table_source" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.resetDeltaTableSource"></a>

```python
def reset_delta_table_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableSource">delta_table_source</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableNameInput">delta_table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableSourceInput">delta_table_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableName">delta_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delta_table_source`<sup>Required</sup> <a name="delta_table_source" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableSource"></a>

```python
delta_table_source: FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference</a>

---

##### `delta_table_name_input`<sup>Optional</sup> <a name="delta_table_name_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableNameInput"></a>

```python
delta_table_name_input: str
```

- *Type:* str

---

##### `delta_table_source_input`<sup>Optional</sup> <a name="delta_table_source_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableSourceInput"></a>

```python
delta_table_source_input: IResolvable | FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a>

---

##### `delta_table_name`<sup>Required</sup> <a name="delta_table_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableName"></a>

```python
delta_table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FeatureEngineeringKafkaConfigBackfillSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a>

---


### FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference <a name="FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetDataframeSchema">reset_dataframe_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetEntityColumns">reset_entity_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetFilterCondition">reset_filter_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetTimeseriesColumn">reset_timeseries_column</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetTransformationSql">reset_transformation_sql</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataframe_schema` <a name="reset_dataframe_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetDataframeSchema"></a>

```python
def reset_dataframe_schema() -> None
```

##### `reset_entity_columns` <a name="reset_entity_columns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetEntityColumns"></a>

```python
def reset_entity_columns() -> None
```

##### `reset_filter_condition` <a name="reset_filter_condition" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetFilterCondition"></a>

```python
def reset_filter_condition() -> None
```

##### `reset_timeseries_column` <a name="reset_timeseries_column" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetTimeseriesColumn"></a>

```python
def reset_timeseries_column() -> None
```

##### `reset_transformation_sql` <a name="reset_transformation_sql" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetTransformationSql"></a>

```python
def reset_transformation_sql() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchemaInput">dataframe_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumnsInput">entity_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.filterConditionInput">filter_condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.fullNameInput">full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput">timeseries_column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSqlInput">transformation_sql_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchema">dataframe_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumns">entity_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.filterCondition">filter_condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumn">timeseries_column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSql">transformation_sql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataframe_schema_input`<sup>Optional</sup> <a name="dataframe_schema_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchemaInput"></a>

```python
dataframe_schema_input: str
```

- *Type:* str

---

##### `entity_columns_input`<sup>Optional</sup> <a name="entity_columns_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumnsInput"></a>

```python
entity_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_condition_input`<sup>Optional</sup> <a name="filter_condition_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.filterConditionInput"></a>

```python
filter_condition_input: str
```

- *Type:* str

---

##### `full_name_input`<sup>Optional</sup> <a name="full_name_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.fullNameInput"></a>

```python
full_name_input: str
```

- *Type:* str

---

##### `timeseries_column_input`<sup>Optional</sup> <a name="timeseries_column_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput"></a>

```python
timeseries_column_input: str
```

- *Type:* str

---

##### `transformation_sql_input`<sup>Optional</sup> <a name="transformation_sql_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSqlInput"></a>

```python
transformation_sql_input: str
```

- *Type:* str

---

##### `dataframe_schema`<sup>Required</sup> <a name="dataframe_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchema"></a>

```python
dataframe_schema: str
```

- *Type:* str

---

##### `entity_columns`<sup>Required</sup> <a name="entity_columns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumns"></a>

```python
entity_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_condition`<sup>Required</sup> <a name="filter_condition" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.filterCondition"></a>

```python
filter_condition: str
```

- *Type:* str

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `timeseries_column`<sup>Required</sup> <a name="timeseries_column" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumn"></a>

```python
timeseries_column: str
```

- *Type:* str

---

##### `transformation_sql`<sup>Required</sup> <a name="transformation_sql" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSql"></a>

```python
transformation_sql: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource</a>

---


### FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference <a name="FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.putDeltaTableSource">put_delta_table_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.resetDeltaTableName">reset_delta_table_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.resetDeltaTableSource">reset_delta_table_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_delta_table_source` <a name="put_delta_table_source" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.putDeltaTableSource"></a>

```python
def put_delta_table_source(
  full_name: str,
  dataframe_schema: str = None,
  entity_columns: typing.List[str] = None,
  filter_condition: str = None,
  timeseries_column: str = None,
  transformation_sql: str = None
) -> None
```

###### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.putDeltaTableSource.parameter.fullName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#full_name FeatureEngineeringKafkaConfig#full_name}.

---

###### `dataframe_schema`<sup>Optional</sup> <a name="dataframe_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.putDeltaTableSource.parameter.dataframeSchema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#dataframe_schema FeatureEngineeringKafkaConfig#dataframe_schema}.

---

###### `entity_columns`<sup>Optional</sup> <a name="entity_columns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.putDeltaTableSource.parameter.entityColumns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#entity_columns FeatureEngineeringKafkaConfig#entity_columns}.

---

###### `filter_condition`<sup>Optional</sup> <a name="filter_condition" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.putDeltaTableSource.parameter.filterCondition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#filter_condition FeatureEngineeringKafkaConfig#filter_condition}.

---

###### `timeseries_column`<sup>Optional</sup> <a name="timeseries_column" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.putDeltaTableSource.parameter.timeseriesColumn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#timeseries_column FeatureEngineeringKafkaConfig#timeseries_column}.

---

###### `transformation_sql`<sup>Optional</sup> <a name="transformation_sql" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.putDeltaTableSource.parameter.transformationSql"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#transformation_sql FeatureEngineeringKafkaConfig#transformation_sql}.

---

##### `reset_delta_table_name` <a name="reset_delta_table_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.resetDeltaTableName"></a>

```python
def reset_delta_table_name() -> None
```

##### `reset_delta_table_source` <a name="reset_delta_table_source" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.resetDeltaTableSource"></a>

```python
def reset_delta_table_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.deltaTableSource">delta_table_source</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.deltaTableNameInput">delta_table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.deltaTableSourceInput">delta_table_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.deltaTableName">delta_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delta_table_source`<sup>Required</sup> <a name="delta_table_source" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.deltaTableSource"></a>

```python
delta_table_source: FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference</a>

---

##### `delta_table_name_input`<sup>Optional</sup> <a name="delta_table_name_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.deltaTableNameInput"></a>

```python
delta_table_name_input: str
```

- *Type:* str

---

##### `delta_table_source_input`<sup>Optional</sup> <a name="delta_table_source_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.deltaTableSourceInput"></a>

```python
delta_table_source_input: IResolvable | FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource</a>

---

##### `delta_table_name`<sup>Required</sup> <a name="delta_table_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.deltaTableName"></a>

```python
delta_table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FeatureEngineeringKafkaConfigIngestionConfigBackfillSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSource</a>

---


### FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference <a name="FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.resetDeltaTableName">reset_delta_table_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delta_table_name` <a name="reset_delta_table_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.resetDeltaTableName"></a>

```python
def reset_delta_table_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.deltaTableNameInput">delta_table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.deltaTableName">delta_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delta_table_name_input`<sup>Optional</sup> <a name="delta_table_name_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.deltaTableNameInput"></a>

```python
delta_table_name_input: str
```

- *Type:* str

---

##### `delta_table_name`<sup>Required</sup> <a name="delta_table_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.deltaTableName"></a>

```python
delta_table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination</a>

---


### FeatureEngineeringKafkaConfigIngestionConfigOutputReference <a name="FeatureEngineeringKafkaConfigIngestionConfigOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.putBackfillSource">put_backfill_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.putIngestionDestination">put_ingestion_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.resetBackfillSource">reset_backfill_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.resetDeduplicationColumns">reset_deduplication_columns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_backfill_source` <a name="put_backfill_source" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.putBackfillSource"></a>

```python
def put_backfill_source(
  delta_table_name: str = None,
  delta_table_source: FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource = None
) -> None
```

###### `delta_table_name`<sup>Optional</sup> <a name="delta_table_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.putBackfillSource.parameter.deltaTableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#delta_table_name FeatureEngineeringKafkaConfig#delta_table_name}.

---

###### `delta_table_source`<sup>Optional</sup> <a name="delta_table_source" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.putBackfillSource.parameter.deltaTableSource"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#delta_table_source FeatureEngineeringKafkaConfig#delta_table_source}.

---

##### `put_ingestion_destination` <a name="put_ingestion_destination" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.putIngestionDestination"></a>

```python
def put_ingestion_destination(
  delta_table_name: str = None
) -> None
```

###### `delta_table_name`<sup>Optional</sup> <a name="delta_table_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.putIngestionDestination.parameter.deltaTableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#delta_table_name FeatureEngineeringKafkaConfig#delta_table_name}.

---

##### `reset_backfill_source` <a name="reset_backfill_source" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.resetBackfillSource"></a>

```python
def reset_backfill_source() -> None
```

##### `reset_deduplication_columns` <a name="reset_deduplication_columns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.resetDeduplicationColumns"></a>

```python
def reset_deduplication_columns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.backfillJobId">backfill_job_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.backfillSource">backfill_source</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.ingestionDestination">ingestion_destination</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.ingestionJobId">ingestion_job_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.ingestionPipelineId">ingestion_pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.backfillSourceInput">backfill_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.deduplicationColumnsInput">deduplication_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.ingestionDestinationInput">ingestion_destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.deduplicationColumns">deduplication_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig">FeatureEngineeringKafkaConfigIngestionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backfill_job_id`<sup>Required</sup> <a name="backfill_job_id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.backfillJobId"></a>

```python
backfill_job_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backfill_source`<sup>Required</sup> <a name="backfill_source" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.backfillSource"></a>

```python
backfill_source: FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference</a>

---

##### `ingestion_destination`<sup>Required</sup> <a name="ingestion_destination" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.ingestionDestination"></a>

```python
ingestion_destination: FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference</a>

---

##### `ingestion_job_id`<sup>Required</sup> <a name="ingestion_job_id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.ingestionJobId"></a>

```python
ingestion_job_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ingestion_pipeline_id`<sup>Required</sup> <a name="ingestion_pipeline_id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.ingestionPipelineId"></a>

```python
ingestion_pipeline_id: str
```

- *Type:* str

---

##### `backfill_source_input`<sup>Optional</sup> <a name="backfill_source_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.backfillSourceInput"></a>

```python
backfill_source_input: IResolvable | FeatureEngineeringKafkaConfigIngestionConfigBackfillSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSource</a>

---

##### `deduplication_columns_input`<sup>Optional</sup> <a name="deduplication_columns_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.deduplicationColumnsInput"></a>

```python
deduplication_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ingestion_destination_input`<sup>Optional</sup> <a name="ingestion_destination_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.ingestionDestinationInput"></a>

```python
ingestion_destination_input: IResolvable | FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination</a>

---

##### `deduplication_columns`<sup>Required</sup> <a name="deduplication_columns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.deduplicationColumns"></a>

```python
deduplication_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FeatureEngineeringKafkaConfigIngestionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig">FeatureEngineeringKafkaConfigIngestionConfig</a>

---


### FeatureEngineeringKafkaConfigKeySchemaOutputReference <a name="FeatureEngineeringKafkaConfigKeySchemaOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.putProtoSchema">put_proto_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resetAvroSchema">reset_avro_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resetJsonSchema">reset_json_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resetProtoSchema">reset_proto_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_proto_schema` <a name="put_proto_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.putProtoSchema"></a>

```python
def put_proto_schema(
  message_name: str,
  schema_text: str
) -> None
```

###### `message_name`<sup>Required</sup> <a name="message_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.putProtoSchema.parameter.messageName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#message_name FeatureEngineeringKafkaConfig#message_name}.

---

###### `schema_text`<sup>Required</sup> <a name="schema_text" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.putProtoSchema.parameter.schemaText"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#schema_text FeatureEngineeringKafkaConfig#schema_text}.

---

##### `reset_avro_schema` <a name="reset_avro_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resetAvroSchema"></a>

```python
def reset_avro_schema() -> None
```

##### `reset_json_schema` <a name="reset_json_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resetJsonSchema"></a>

```python
def reset_json_schema() -> None
```

##### `reset_proto_schema` <a name="reset_proto_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resetProtoSchema"></a>

```python
def reset_proto_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.protoSchema">proto_schema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference">FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.avroSchemaInput">avro_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchemaInput">json_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.protoSchemaInput">proto_schema_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema">FeatureEngineeringKafkaConfigKeySchemaProtoSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.avroSchema">avro_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchema">json_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `proto_schema`<sup>Required</sup> <a name="proto_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.protoSchema"></a>

```python
proto_schema: FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference">FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference</a>

---

##### `avro_schema_input`<sup>Optional</sup> <a name="avro_schema_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.avroSchemaInput"></a>

```python
avro_schema_input: str
```

- *Type:* str

---

##### `json_schema_input`<sup>Optional</sup> <a name="json_schema_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchemaInput"></a>

```python
json_schema_input: str
```

- *Type:* str

---

##### `proto_schema_input`<sup>Optional</sup> <a name="proto_schema_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.protoSchemaInput"></a>

```python
proto_schema_input: IResolvable | FeatureEngineeringKafkaConfigKeySchemaProtoSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema">FeatureEngineeringKafkaConfigKeySchemaProtoSchema</a>

---

##### `avro_schema`<sup>Required</sup> <a name="avro_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.avroSchema"></a>

```python
avro_schema: str
```

- *Type:* str

---

##### `json_schema`<sup>Required</sup> <a name="json_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchema"></a>

```python
json_schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FeatureEngineeringKafkaConfigKeySchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a>

---


### FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference <a name="FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.messageNameInput">message_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.schemaTextInput">schema_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.messageName">message_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.schemaText">schema_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema">FeatureEngineeringKafkaConfigKeySchemaProtoSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_name_input`<sup>Optional</sup> <a name="message_name_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.messageNameInput"></a>

```python
message_name_input: str
```

- *Type:* str

---

##### `schema_text_input`<sup>Optional</sup> <a name="schema_text_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.schemaTextInput"></a>

```python
schema_text_input: str
```

- *Type:* str

---

##### `message_name`<sup>Required</sup> <a name="message_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.messageName"></a>

```python
message_name: str
```

- *Type:* str

---

##### `schema_text`<sup>Required</sup> <a name="schema_text" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.schemaText"></a>

```python
schema_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FeatureEngineeringKafkaConfigKeySchemaProtoSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema">FeatureEngineeringKafkaConfigKeySchemaProtoSchema</a>

---


### FeatureEngineeringKafkaConfigProviderConfigOutputReference <a name="FeatureEngineeringKafkaConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FeatureEngineeringKafkaConfigProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a>

---


### FeatureEngineeringKafkaConfigSubscriptionModeOutputReference <a name="FeatureEngineeringKafkaConfigSubscriptionModeOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetAssign">reset_assign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribe">reset_subscribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribePattern">reset_subscribe_pattern</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_assign` <a name="reset_assign" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetAssign"></a>

```python
def reset_assign() -> None
```

##### `reset_subscribe` <a name="reset_subscribe" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribe"></a>

```python
def reset_subscribe() -> None
```

##### `reset_subscribe_pattern` <a name="reset_subscribe_pattern" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribePattern"></a>

```python
def reset_subscribe_pattern() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assignInput">assign_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribeInput">subscribe_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePatternInput">subscribe_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assign">assign</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribe">subscribe</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePattern">subscribe_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assign_input`<sup>Optional</sup> <a name="assign_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assignInput"></a>

```python
assign_input: str
```

- *Type:* str

---

##### `subscribe_input`<sup>Optional</sup> <a name="subscribe_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribeInput"></a>

```python
subscribe_input: str
```

- *Type:* str

---

##### `subscribe_pattern_input`<sup>Optional</sup> <a name="subscribe_pattern_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePatternInput"></a>

```python
subscribe_pattern_input: str
```

- *Type:* str

---

##### `assign`<sup>Required</sup> <a name="assign" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assign"></a>

```python
assign: str
```

- *Type:* str

---

##### `subscribe`<sup>Required</sup> <a name="subscribe" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribe"></a>

```python
subscribe: str
```

- *Type:* str

---

##### `subscribe_pattern`<sup>Required</sup> <a name="subscribe_pattern" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePattern"></a>

```python
subscribe_pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FeatureEngineeringKafkaConfigSubscriptionMode
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a>

---


### FeatureEngineeringKafkaConfigValueSchemaOutputReference <a name="FeatureEngineeringKafkaConfigValueSchemaOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.putProtoSchema">put_proto_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resetAvroSchema">reset_avro_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resetJsonSchema">reset_json_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resetProtoSchema">reset_proto_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_proto_schema` <a name="put_proto_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.putProtoSchema"></a>

```python
def put_proto_schema(
  message_name: str,
  schema_text: str
) -> None
```

###### `message_name`<sup>Required</sup> <a name="message_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.putProtoSchema.parameter.messageName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#message_name FeatureEngineeringKafkaConfig#message_name}.

---

###### `schema_text`<sup>Required</sup> <a name="schema_text" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.putProtoSchema.parameter.schemaText"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/feature_engineering_kafka_config#schema_text FeatureEngineeringKafkaConfig#schema_text}.

---

##### `reset_avro_schema` <a name="reset_avro_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resetAvroSchema"></a>

```python
def reset_avro_schema() -> None
```

##### `reset_json_schema` <a name="reset_json_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resetJsonSchema"></a>

```python
def reset_json_schema() -> None
```

##### `reset_proto_schema` <a name="reset_proto_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resetProtoSchema"></a>

```python
def reset_proto_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.protoSchema">proto_schema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference">FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.avroSchemaInput">avro_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchemaInput">json_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.protoSchemaInput">proto_schema_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema">FeatureEngineeringKafkaConfigValueSchemaProtoSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.avroSchema">avro_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchema">json_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `proto_schema`<sup>Required</sup> <a name="proto_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.protoSchema"></a>

```python
proto_schema: FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference">FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference</a>

---

##### `avro_schema_input`<sup>Optional</sup> <a name="avro_schema_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.avroSchemaInput"></a>

```python
avro_schema_input: str
```

- *Type:* str

---

##### `json_schema_input`<sup>Optional</sup> <a name="json_schema_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchemaInput"></a>

```python
json_schema_input: str
```

- *Type:* str

---

##### `proto_schema_input`<sup>Optional</sup> <a name="proto_schema_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.protoSchemaInput"></a>

```python
proto_schema_input: IResolvable | FeatureEngineeringKafkaConfigValueSchemaProtoSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema">FeatureEngineeringKafkaConfigValueSchemaProtoSchema</a>

---

##### `avro_schema`<sup>Required</sup> <a name="avro_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.avroSchema"></a>

```python
avro_schema: str
```

- *Type:* str

---

##### `json_schema`<sup>Required</sup> <a name="json_schema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchema"></a>

```python
json_schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FeatureEngineeringKafkaConfigValueSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a>

---


### FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference <a name="FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import feature_engineering_kafka_config

featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.messageNameInput">message_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.schemaTextInput">schema_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.messageName">message_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.schemaText">schema_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema">FeatureEngineeringKafkaConfigValueSchemaProtoSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_name_input`<sup>Optional</sup> <a name="message_name_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.messageNameInput"></a>

```python
message_name_input: str
```

- *Type:* str

---

##### `schema_text_input`<sup>Optional</sup> <a name="schema_text_input" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.schemaTextInput"></a>

```python
schema_text_input: str
```

- *Type:* str

---

##### `message_name`<sup>Required</sup> <a name="message_name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.messageName"></a>

```python
message_name: str
```

- *Type:* str

---

##### `schema_text`<sup>Required</sup> <a name="schema_text" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.schemaText"></a>

```python
schema_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FeatureEngineeringKafkaConfigValueSchemaProtoSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema">FeatureEngineeringKafkaConfigValueSchemaProtoSchema</a>

---



