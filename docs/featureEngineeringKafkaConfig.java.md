# `featureEngineeringKafkaConfig` Submodule <a name="`featureEngineeringKafkaConfig` Submodule" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FeatureEngineeringKafkaConfig <a name="FeatureEngineeringKafkaConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config databricks_feature_engineering_kafka_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfig;

FeatureEngineeringKafkaConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authConfig(FeatureEngineeringKafkaConfigAuthConfig)
    .bootstrapServers(java.lang.String)
    .subscriptionMode(FeatureEngineeringKafkaConfigSubscriptionMode)
//  .backfillSource(FeatureEngineeringKafkaConfigBackfillSource)
//  .extraOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .ingestionConfig(FeatureEngineeringKafkaConfigIngestionConfig)
//  .keySchema(FeatureEngineeringKafkaConfigKeySchema)
//  .providerConfig(FeatureEngineeringKafkaConfigProviderConfig)
//  .valueSchema(FeatureEngineeringKafkaConfigValueSchema)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.authConfig">authConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#auth_config FeatureEngineeringKafkaConfig#auth_config}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.bootstrapServers">bootstrapServers</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#bootstrap_servers FeatureEngineeringKafkaConfig#bootstrap_servers}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.subscriptionMode">subscriptionMode</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#subscription_mode FeatureEngineeringKafkaConfig#subscription_mode}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.backfillSource">backfillSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#backfill_source FeatureEngineeringKafkaConfig#backfill_source}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.extraOptions">extraOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#extra_options FeatureEngineeringKafkaConfig#extra_options}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.ingestionConfig">ingestionConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig">FeatureEngineeringKafkaConfigIngestionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#ingestion_config FeatureEngineeringKafkaConfig#ingestion_config}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.keySchema">keySchema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#key_schema FeatureEngineeringKafkaConfig#key_schema}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#provider_config FeatureEngineeringKafkaConfig#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.valueSchema">valueSchema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#value_schema FeatureEngineeringKafkaConfig#value_schema}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authConfig`<sup>Required</sup> <a name="authConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.authConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#auth_config FeatureEngineeringKafkaConfig#auth_config}.

---

##### `bootstrapServers`<sup>Required</sup> <a name="bootstrapServers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.bootstrapServers"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#bootstrap_servers FeatureEngineeringKafkaConfig#bootstrap_servers}.

---

##### `subscriptionMode`<sup>Required</sup> <a name="subscriptionMode" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.subscriptionMode"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#subscription_mode FeatureEngineeringKafkaConfig#subscription_mode}.

---

##### `backfillSource`<sup>Optional</sup> <a name="backfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.backfillSource"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#backfill_source FeatureEngineeringKafkaConfig#backfill_source}.

---

##### `extraOptions`<sup>Optional</sup> <a name="extraOptions" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.extraOptions"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#extra_options FeatureEngineeringKafkaConfig#extra_options}.

---

##### `ingestionConfig`<sup>Optional</sup> <a name="ingestionConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.ingestionConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig">FeatureEngineeringKafkaConfigIngestionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#ingestion_config FeatureEngineeringKafkaConfig#ingestion_config}.

---

##### `keySchema`<sup>Optional</sup> <a name="keySchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.keySchema"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#key_schema FeatureEngineeringKafkaConfig#key_schema}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#provider_config FeatureEngineeringKafkaConfig#provider_config}.

---

##### `valueSchema`<sup>Optional</sup> <a name="valueSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.valueSchema"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#value_schema FeatureEngineeringKafkaConfig#value_schema}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putAuthConfig">putAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putBackfillSource">putBackfillSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putIngestionConfig">putIngestionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putKeySchema">putKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putSubscriptionMode">putSubscriptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putValueSchema">putValueSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetBackfillSource">resetBackfillSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetExtraOptions">resetExtraOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetIngestionConfig">resetIngestionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetKeySchema">resetKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetValueSchema">resetValueSchema</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthConfig` <a name="putAuthConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putAuthConfig"></a>

```java
public void putAuthConfig(FeatureEngineeringKafkaConfigAuthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a>

---

##### `putBackfillSource` <a name="putBackfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putBackfillSource"></a>

```java
public void putBackfillSource(FeatureEngineeringKafkaConfigBackfillSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putBackfillSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a>

---

##### `putIngestionConfig` <a name="putIngestionConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putIngestionConfig"></a>

```java
public void putIngestionConfig(FeatureEngineeringKafkaConfigIngestionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putIngestionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig">FeatureEngineeringKafkaConfigIngestionConfig</a>

---

##### `putKeySchema` <a name="putKeySchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putKeySchema"></a>

```java
public void putKeySchema(FeatureEngineeringKafkaConfigKeySchema value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putKeySchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putProviderConfig"></a>

```java
public void putProviderConfig(FeatureEngineeringKafkaConfigProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a>

---

##### `putSubscriptionMode` <a name="putSubscriptionMode" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putSubscriptionMode"></a>

```java
public void putSubscriptionMode(FeatureEngineeringKafkaConfigSubscriptionMode value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putSubscriptionMode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a>

---

##### `putValueSchema` <a name="putValueSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putValueSchema"></a>

```java
public void putValueSchema(FeatureEngineeringKafkaConfigValueSchema value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putValueSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a>

---

##### `resetBackfillSource` <a name="resetBackfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetBackfillSource"></a>

```java
public void resetBackfillSource()
```

##### `resetExtraOptions` <a name="resetExtraOptions" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetExtraOptions"></a>

```java
public void resetExtraOptions()
```

##### `resetIngestionConfig` <a name="resetIngestionConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetIngestionConfig"></a>

```java
public void resetIngestionConfig()
```

##### `resetKeySchema` <a name="resetKeySchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetKeySchema"></a>

```java
public void resetKeySchema()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetValueSchema` <a name="resetValueSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetValueSchema"></a>

```java
public void resetValueSchema()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FeatureEngineeringKafkaConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isConstruct"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfig;

FeatureEngineeringKafkaConfig.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfig;

FeatureEngineeringKafkaConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfig;

FeatureEngineeringKafkaConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfig;

FeatureEngineeringKafkaConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FeatureEngineeringKafkaConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a FeatureEngineeringKafkaConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FeatureEngineeringKafkaConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FeatureEngineeringKafkaConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the FeatureEngineeringKafkaConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.authConfig">authConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference">FeatureEngineeringKafkaConfigAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.backfillSource">backfillSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference">FeatureEngineeringKafkaConfigBackfillSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.ingestionConfig">ingestionConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference">FeatureEngineeringKafkaConfigIngestionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.keySchema">keySchema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference">FeatureEngineeringKafkaConfigKeySchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference">FeatureEngineeringKafkaConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.subscriptionMode">subscriptionMode</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference">FeatureEngineeringKafkaConfigSubscriptionModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.valueSchema">valueSchema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference">FeatureEngineeringKafkaConfigValueSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.authConfigInput">authConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.backfillSourceInput">backfillSourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.bootstrapServersInput">bootstrapServersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.extraOptionsInput">extraOptionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.ingestionConfigInput">ingestionConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig">FeatureEngineeringKafkaConfigIngestionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.keySchemaInput">keySchemaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.subscriptionModeInput">subscriptionModeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.valueSchemaInput">valueSchemaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.bootstrapServers">bootstrapServers</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.extraOptions">extraOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authConfig`<sup>Required</sup> <a name="authConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.authConfig"></a>

```java
public FeatureEngineeringKafkaConfigAuthConfigOutputReference getAuthConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference">FeatureEngineeringKafkaConfigAuthConfigOutputReference</a>

---

##### `backfillSource`<sup>Required</sup> <a name="backfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.backfillSource"></a>

```java
public FeatureEngineeringKafkaConfigBackfillSourceOutputReference getBackfillSource();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference">FeatureEngineeringKafkaConfigBackfillSourceOutputReference</a>

---

##### `ingestionConfig`<sup>Required</sup> <a name="ingestionConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.ingestionConfig"></a>

```java
public FeatureEngineeringKafkaConfigIngestionConfigOutputReference getIngestionConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference">FeatureEngineeringKafkaConfigIngestionConfigOutputReference</a>

---

##### `keySchema`<sup>Required</sup> <a name="keySchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.keySchema"></a>

```java
public FeatureEngineeringKafkaConfigKeySchemaOutputReference getKeySchema();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference">FeatureEngineeringKafkaConfigKeySchemaOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.providerConfig"></a>

```java
public FeatureEngineeringKafkaConfigProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference">FeatureEngineeringKafkaConfigProviderConfigOutputReference</a>

---

##### `subscriptionMode`<sup>Required</sup> <a name="subscriptionMode" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.subscriptionMode"></a>

```java
public FeatureEngineeringKafkaConfigSubscriptionModeOutputReference getSubscriptionMode();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference">FeatureEngineeringKafkaConfigSubscriptionModeOutputReference</a>

---

##### `valueSchema`<sup>Required</sup> <a name="valueSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.valueSchema"></a>

```java
public FeatureEngineeringKafkaConfigValueSchemaOutputReference getValueSchema();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference">FeatureEngineeringKafkaConfigValueSchemaOutputReference</a>

---

##### `authConfigInput`<sup>Optional</sup> <a name="authConfigInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.authConfigInput"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigAuthConfig getAuthConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a>

---

##### `backfillSourceInput`<sup>Optional</sup> <a name="backfillSourceInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.backfillSourceInput"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigBackfillSource getBackfillSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a>

---

##### `bootstrapServersInput`<sup>Optional</sup> <a name="bootstrapServersInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.bootstrapServersInput"></a>

```java
public java.lang.String getBootstrapServersInput();
```

- *Type:* java.lang.String

---

##### `extraOptionsInput`<sup>Optional</sup> <a name="extraOptionsInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.extraOptionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ingestionConfigInput`<sup>Optional</sup> <a name="ingestionConfigInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.ingestionConfigInput"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigIngestionConfig getIngestionConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig">FeatureEngineeringKafkaConfigIngestionConfig</a>

---

##### `keySchemaInput`<sup>Optional</sup> <a name="keySchemaInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.keySchemaInput"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigKeySchema getKeySchemaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a>

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.providerConfigInput"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a>

---

##### `subscriptionModeInput`<sup>Optional</sup> <a name="subscriptionModeInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.subscriptionModeInput"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigSubscriptionMode getSubscriptionModeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a>

---

##### `valueSchemaInput`<sup>Optional</sup> <a name="valueSchemaInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.valueSchemaInput"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigValueSchema getValueSchemaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a>

---

##### `bootstrapServers`<sup>Required</sup> <a name="bootstrapServers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.bootstrapServers"></a>

```java
public java.lang.String getBootstrapServers();
```

- *Type:* java.lang.String

---

##### `extraOptions`<sup>Required</sup> <a name="extraOptions" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.extraOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FeatureEngineeringKafkaConfigAuthConfig <a name="FeatureEngineeringKafkaConfigAuthConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigAuthConfig;

FeatureEngineeringKafkaConfigAuthConfig.builder()
//  .mtlsConfig(FeatureEngineeringKafkaConfigAuthConfigMtlsConfig)
//  .ucServiceCredentialName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig.property.mtlsConfig">mtlsConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig">FeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#mtls_config FeatureEngineeringKafkaConfig#mtls_config}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig.property.ucServiceCredentialName">ucServiceCredentialName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#uc_service_credential_name FeatureEngineeringKafkaConfig#uc_service_credential_name}. |

---

##### `mtlsConfig`<sup>Optional</sup> <a name="mtlsConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig.property.mtlsConfig"></a>

```java
public FeatureEngineeringKafkaConfigAuthConfigMtlsConfig getMtlsConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig">FeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#mtls_config FeatureEngineeringKafkaConfig#mtls_config}.

---

##### `ucServiceCredentialName`<sup>Optional</sup> <a name="ucServiceCredentialName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig.property.ucServiceCredentialName"></a>

```java
public java.lang.String getUcServiceCredentialName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#uc_service_credential_name FeatureEngineeringKafkaConfig#uc_service_credential_name}.

---

### FeatureEngineeringKafkaConfigAuthConfigMtlsConfig <a name="FeatureEngineeringKafkaConfigAuthConfigMtlsConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig;

FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.builder()
    .keyPasswordRef(FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef)
    .keystoreLocation(java.lang.String)
    .keystorePasswordRef(FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef)
    .truststoreLocation(java.lang.String)
    .truststorePasswordRef(FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef)
//  .disableHostnameVerification(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.keyPasswordRef">keyPasswordRef</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#key_password_ref FeatureEngineeringKafkaConfig#key_password_ref}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.keystoreLocation">keystoreLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#keystore_location FeatureEngineeringKafkaConfig#keystore_location}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.keystorePasswordRef">keystorePasswordRef</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#keystore_password_ref FeatureEngineeringKafkaConfig#keystore_password_ref}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.truststoreLocation">truststoreLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#truststore_location FeatureEngineeringKafkaConfig#truststore_location}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.truststorePasswordRef">truststorePasswordRef</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#truststore_password_ref FeatureEngineeringKafkaConfig#truststore_password_ref}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.disableHostnameVerification">disableHostnameVerification</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#disable_hostname_verification FeatureEngineeringKafkaConfig#disable_hostname_verification}. |

---

##### `keyPasswordRef`<sup>Required</sup> <a name="keyPasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.keyPasswordRef"></a>

```java
public FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef getKeyPasswordRef();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#key_password_ref FeatureEngineeringKafkaConfig#key_password_ref}.

---

##### `keystoreLocation`<sup>Required</sup> <a name="keystoreLocation" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.keystoreLocation"></a>

```java
public java.lang.String getKeystoreLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#keystore_location FeatureEngineeringKafkaConfig#keystore_location}.

---

##### `keystorePasswordRef`<sup>Required</sup> <a name="keystorePasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.keystorePasswordRef"></a>

```java
public FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef getKeystorePasswordRef();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#keystore_password_ref FeatureEngineeringKafkaConfig#keystore_password_ref}.

---

##### `truststoreLocation`<sup>Required</sup> <a name="truststoreLocation" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.truststoreLocation"></a>

```java
public java.lang.String getTruststoreLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#truststore_location FeatureEngineeringKafkaConfig#truststore_location}.

---

##### `truststorePasswordRef`<sup>Required</sup> <a name="truststorePasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.truststorePasswordRef"></a>

```java
public FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef getTruststorePasswordRef();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#truststore_password_ref FeatureEngineeringKafkaConfig#truststore_password_ref}.

---

##### `disableHostnameVerification`<sup>Optional</sup> <a name="disableHostnameVerification" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.disableHostnameVerification"></a>

```java
public java.lang.Boolean|IResolvable getDisableHostnameVerification();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#disable_hostname_verification FeatureEngineeringKafkaConfig#disable_hostname_verification}.

---

### FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef <a name="FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef;

FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef.builder()
    .key(java.lang.String)
    .scope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#key FeatureEngineeringKafkaConfig#key}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#scope FeatureEngineeringKafkaConfig#scope}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#key FeatureEngineeringKafkaConfig#key}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#scope FeatureEngineeringKafkaConfig#scope}.

---

### FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef <a name="FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef;

FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef.builder()
    .key(java.lang.String)
    .scope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#key FeatureEngineeringKafkaConfig#key}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#scope FeatureEngineeringKafkaConfig#scope}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#key FeatureEngineeringKafkaConfig#key}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#scope FeatureEngineeringKafkaConfig#scope}.

---

### FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef <a name="FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef;

FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef.builder()
    .key(java.lang.String)
    .scope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#key FeatureEngineeringKafkaConfig#key}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#scope FeatureEngineeringKafkaConfig#scope}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#key FeatureEngineeringKafkaConfig#key}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#scope FeatureEngineeringKafkaConfig#scope}.

---

### FeatureEngineeringKafkaConfigBackfillSource <a name="FeatureEngineeringKafkaConfigBackfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigBackfillSource;

FeatureEngineeringKafkaConfigBackfillSource.builder()
//  .deltaTableName(java.lang.String)
//  .deltaTableSource(FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource.property.deltaTableName">deltaTableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#delta_table_name FeatureEngineeringKafkaConfig#delta_table_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource.property.deltaTableSource">deltaTableSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#delta_table_source FeatureEngineeringKafkaConfig#delta_table_source}. |

---

##### `deltaTableName`<sup>Optional</sup> <a name="deltaTableName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource.property.deltaTableName"></a>

```java
public java.lang.String getDeltaTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#delta_table_name FeatureEngineeringKafkaConfig#delta_table_name}.

---

##### `deltaTableSource`<sup>Optional</sup> <a name="deltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource.property.deltaTableSource"></a>

```java
public FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource getDeltaTableSource();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#delta_table_source FeatureEngineeringKafkaConfig#delta_table_source}.

---

### FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource <a name="FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource;

FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.builder()
    .fullName(java.lang.String)
//  .dataframeSchema(java.lang.String)
//  .entityColumns(java.util.List<java.lang.String>)
//  .filterCondition(java.lang.String)
//  .timeseriesColumn(java.lang.String)
//  .transformationSql(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.fullName">fullName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#full_name FeatureEngineeringKafkaConfig#full_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.dataframeSchema">dataframeSchema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#dataframe_schema FeatureEngineeringKafkaConfig#dataframe_schema}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.entityColumns">entityColumns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#entity_columns FeatureEngineeringKafkaConfig#entity_columns}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.filterCondition">filterCondition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#filter_condition FeatureEngineeringKafkaConfig#filter_condition}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.timeseriesColumn">timeseriesColumn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#timeseries_column FeatureEngineeringKafkaConfig#timeseries_column}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.transformationSql">transformationSql</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#transformation_sql FeatureEngineeringKafkaConfig#transformation_sql}. |

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#full_name FeatureEngineeringKafkaConfig#full_name}.

---

##### `dataframeSchema`<sup>Optional</sup> <a name="dataframeSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.dataframeSchema"></a>

```java
public java.lang.String getDataframeSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#dataframe_schema FeatureEngineeringKafkaConfig#dataframe_schema}.

---

##### `entityColumns`<sup>Optional</sup> <a name="entityColumns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.entityColumns"></a>

```java
public java.util.List<java.lang.String> getEntityColumns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#entity_columns FeatureEngineeringKafkaConfig#entity_columns}.

---

##### `filterCondition`<sup>Optional</sup> <a name="filterCondition" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.filterCondition"></a>

```java
public java.lang.String getFilterCondition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#filter_condition FeatureEngineeringKafkaConfig#filter_condition}.

---

##### `timeseriesColumn`<sup>Optional</sup> <a name="timeseriesColumn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.timeseriesColumn"></a>

```java
public java.lang.String getTimeseriesColumn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#timeseries_column FeatureEngineeringKafkaConfig#timeseries_column}.

---

##### `transformationSql`<sup>Optional</sup> <a name="transformationSql" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.transformationSql"></a>

```java
public java.lang.String getTransformationSql();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#transformation_sql FeatureEngineeringKafkaConfig#transformation_sql}.

---

### FeatureEngineeringKafkaConfigConfig <a name="FeatureEngineeringKafkaConfigConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigConfig;

FeatureEngineeringKafkaConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authConfig(FeatureEngineeringKafkaConfigAuthConfig)
    .bootstrapServers(java.lang.String)
    .subscriptionMode(FeatureEngineeringKafkaConfigSubscriptionMode)
//  .backfillSource(FeatureEngineeringKafkaConfigBackfillSource)
//  .extraOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .ingestionConfig(FeatureEngineeringKafkaConfigIngestionConfig)
//  .keySchema(FeatureEngineeringKafkaConfigKeySchema)
//  .providerConfig(FeatureEngineeringKafkaConfigProviderConfig)
//  .valueSchema(FeatureEngineeringKafkaConfigValueSchema)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.authConfig">authConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#auth_config FeatureEngineeringKafkaConfig#auth_config}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.bootstrapServers">bootstrapServers</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#bootstrap_servers FeatureEngineeringKafkaConfig#bootstrap_servers}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.subscriptionMode">subscriptionMode</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#subscription_mode FeatureEngineeringKafkaConfig#subscription_mode}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.backfillSource">backfillSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#backfill_source FeatureEngineeringKafkaConfig#backfill_source}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.extraOptions">extraOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#extra_options FeatureEngineeringKafkaConfig#extra_options}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.ingestionConfig">ingestionConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig">FeatureEngineeringKafkaConfigIngestionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#ingestion_config FeatureEngineeringKafkaConfig#ingestion_config}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.keySchema">keySchema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#key_schema FeatureEngineeringKafkaConfig#key_schema}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#provider_config FeatureEngineeringKafkaConfig#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.valueSchema">valueSchema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#value_schema FeatureEngineeringKafkaConfig#value_schema}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authConfig`<sup>Required</sup> <a name="authConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.authConfig"></a>

```java
public FeatureEngineeringKafkaConfigAuthConfig getAuthConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#auth_config FeatureEngineeringKafkaConfig#auth_config}.

---

##### `bootstrapServers`<sup>Required</sup> <a name="bootstrapServers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.bootstrapServers"></a>

```java
public java.lang.String getBootstrapServers();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#bootstrap_servers FeatureEngineeringKafkaConfig#bootstrap_servers}.

---

##### `subscriptionMode`<sup>Required</sup> <a name="subscriptionMode" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.subscriptionMode"></a>

```java
public FeatureEngineeringKafkaConfigSubscriptionMode getSubscriptionMode();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#subscription_mode FeatureEngineeringKafkaConfig#subscription_mode}.

---

##### `backfillSource`<sup>Optional</sup> <a name="backfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.backfillSource"></a>

```java
public FeatureEngineeringKafkaConfigBackfillSource getBackfillSource();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#backfill_source FeatureEngineeringKafkaConfig#backfill_source}.

---

##### `extraOptions`<sup>Optional</sup> <a name="extraOptions" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.extraOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#extra_options FeatureEngineeringKafkaConfig#extra_options}.

---

##### `ingestionConfig`<sup>Optional</sup> <a name="ingestionConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.ingestionConfig"></a>

```java
public FeatureEngineeringKafkaConfigIngestionConfig getIngestionConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig">FeatureEngineeringKafkaConfigIngestionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#ingestion_config FeatureEngineeringKafkaConfig#ingestion_config}.

---

##### `keySchema`<sup>Optional</sup> <a name="keySchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.keySchema"></a>

```java
public FeatureEngineeringKafkaConfigKeySchema getKeySchema();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#key_schema FeatureEngineeringKafkaConfig#key_schema}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.providerConfig"></a>

```java
public FeatureEngineeringKafkaConfigProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#provider_config FeatureEngineeringKafkaConfig#provider_config}.

---

##### `valueSchema`<sup>Optional</sup> <a name="valueSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.valueSchema"></a>

```java
public FeatureEngineeringKafkaConfigValueSchema getValueSchema();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#value_schema FeatureEngineeringKafkaConfig#value_schema}.

---

### FeatureEngineeringKafkaConfigIngestionConfig <a name="FeatureEngineeringKafkaConfigIngestionConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigIngestionConfig;

FeatureEngineeringKafkaConfigIngestionConfig.builder()
    .ingestionDestination(FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination)
//  .backfillSource(FeatureEngineeringKafkaConfigIngestionConfigBackfillSource)
//  .deduplicationColumns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig.property.ingestionDestination">ingestionDestination</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#ingestion_destination FeatureEngineeringKafkaConfig#ingestion_destination}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig.property.backfillSource">backfillSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#backfill_source FeatureEngineeringKafkaConfig#backfill_source}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig.property.deduplicationColumns">deduplicationColumns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#deduplication_columns FeatureEngineeringKafkaConfig#deduplication_columns}. |

---

##### `ingestionDestination`<sup>Required</sup> <a name="ingestionDestination" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig.property.ingestionDestination"></a>

```java
public FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination getIngestionDestination();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#ingestion_destination FeatureEngineeringKafkaConfig#ingestion_destination}.

---

##### `backfillSource`<sup>Optional</sup> <a name="backfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig.property.backfillSource"></a>

```java
public FeatureEngineeringKafkaConfigIngestionConfigBackfillSource getBackfillSource();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#backfill_source FeatureEngineeringKafkaConfig#backfill_source}.

---

##### `deduplicationColumns`<sup>Optional</sup> <a name="deduplicationColumns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig.property.deduplicationColumns"></a>

```java
public java.util.List<java.lang.String> getDeduplicationColumns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#deduplication_columns FeatureEngineeringKafkaConfig#deduplication_columns}.

---

### FeatureEngineeringKafkaConfigIngestionConfigBackfillSource <a name="FeatureEngineeringKafkaConfigIngestionConfigBackfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource;

FeatureEngineeringKafkaConfigIngestionConfigBackfillSource.builder()
//  .deltaTableName(java.lang.String)
//  .deltaTableSource(FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource.property.deltaTableName">deltaTableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#delta_table_name FeatureEngineeringKafkaConfig#delta_table_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource.property.deltaTableSource">deltaTableSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#delta_table_source FeatureEngineeringKafkaConfig#delta_table_source}. |

---

##### `deltaTableName`<sup>Optional</sup> <a name="deltaTableName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource.property.deltaTableName"></a>

```java
public java.lang.String getDeltaTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#delta_table_name FeatureEngineeringKafkaConfig#delta_table_name}.

---

##### `deltaTableSource`<sup>Optional</sup> <a name="deltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource.property.deltaTableSource"></a>

```java
public FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource getDeltaTableSource();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#delta_table_source FeatureEngineeringKafkaConfig#delta_table_source}.

---

### FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource <a name="FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource;

FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.builder()
    .fullName(java.lang.String)
//  .dataframeSchema(java.lang.String)
//  .entityColumns(java.util.List<java.lang.String>)
//  .filterCondition(java.lang.String)
//  .timeseriesColumn(java.lang.String)
//  .transformationSql(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.fullName">fullName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#full_name FeatureEngineeringKafkaConfig#full_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.dataframeSchema">dataframeSchema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#dataframe_schema FeatureEngineeringKafkaConfig#dataframe_schema}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.entityColumns">entityColumns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#entity_columns FeatureEngineeringKafkaConfig#entity_columns}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.filterCondition">filterCondition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#filter_condition FeatureEngineeringKafkaConfig#filter_condition}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.timeseriesColumn">timeseriesColumn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#timeseries_column FeatureEngineeringKafkaConfig#timeseries_column}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.transformationSql">transformationSql</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#transformation_sql FeatureEngineeringKafkaConfig#transformation_sql}. |

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#full_name FeatureEngineeringKafkaConfig#full_name}.

---

##### `dataframeSchema`<sup>Optional</sup> <a name="dataframeSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.dataframeSchema"></a>

```java
public java.lang.String getDataframeSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#dataframe_schema FeatureEngineeringKafkaConfig#dataframe_schema}.

---

##### `entityColumns`<sup>Optional</sup> <a name="entityColumns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.entityColumns"></a>

```java
public java.util.List<java.lang.String> getEntityColumns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#entity_columns FeatureEngineeringKafkaConfig#entity_columns}.

---

##### `filterCondition`<sup>Optional</sup> <a name="filterCondition" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.filterCondition"></a>

```java
public java.lang.String getFilterCondition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#filter_condition FeatureEngineeringKafkaConfig#filter_condition}.

---

##### `timeseriesColumn`<sup>Optional</sup> <a name="timeseriesColumn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.timeseriesColumn"></a>

```java
public java.lang.String getTimeseriesColumn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#timeseries_column FeatureEngineeringKafkaConfig#timeseries_column}.

---

##### `transformationSql`<sup>Optional</sup> <a name="transformationSql" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.transformationSql"></a>

```java
public java.lang.String getTransformationSql();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#transformation_sql FeatureEngineeringKafkaConfig#transformation_sql}.

---

### FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination <a name="FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination;

FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination.builder()
//  .deltaTableName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination.property.deltaTableName">deltaTableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#delta_table_name FeatureEngineeringKafkaConfig#delta_table_name}. |

---

##### `deltaTableName`<sup>Optional</sup> <a name="deltaTableName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination.property.deltaTableName"></a>

```java
public java.lang.String getDeltaTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#delta_table_name FeatureEngineeringKafkaConfig#delta_table_name}.

---

### FeatureEngineeringKafkaConfigKeySchema <a name="FeatureEngineeringKafkaConfigKeySchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigKeySchema;

FeatureEngineeringKafkaConfigKeySchema.builder()
//  .avroSchema(java.lang.String)
//  .jsonSchema(java.lang.String)
//  .protoSchema(FeatureEngineeringKafkaConfigKeySchemaProtoSchema)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema.property.avroSchema">avroSchema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#avro_schema FeatureEngineeringKafkaConfig#avro_schema}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema.property.jsonSchema">jsonSchema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema.property.protoSchema">protoSchema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema">FeatureEngineeringKafkaConfigKeySchemaProtoSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#proto_schema FeatureEngineeringKafkaConfig#proto_schema}. |

---

##### `avroSchema`<sup>Optional</sup> <a name="avroSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema.property.avroSchema"></a>

```java
public java.lang.String getAvroSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#avro_schema FeatureEngineeringKafkaConfig#avro_schema}.

---

##### `jsonSchema`<sup>Optional</sup> <a name="jsonSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema.property.jsonSchema"></a>

```java
public java.lang.String getJsonSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}.

---

##### `protoSchema`<sup>Optional</sup> <a name="protoSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema.property.protoSchema"></a>

```java
public FeatureEngineeringKafkaConfigKeySchemaProtoSchema getProtoSchema();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema">FeatureEngineeringKafkaConfigKeySchemaProtoSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#proto_schema FeatureEngineeringKafkaConfig#proto_schema}.

---

### FeatureEngineeringKafkaConfigKeySchemaProtoSchema <a name="FeatureEngineeringKafkaConfigKeySchemaProtoSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigKeySchemaProtoSchema;

FeatureEngineeringKafkaConfigKeySchemaProtoSchema.builder()
    .messageName(java.lang.String)
    .schemaText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema.property.messageName">messageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#message_name FeatureEngineeringKafkaConfig#message_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema.property.schemaText">schemaText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#schema_text FeatureEngineeringKafkaConfig#schema_text}. |

---

##### `messageName`<sup>Required</sup> <a name="messageName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema.property.messageName"></a>

```java
public java.lang.String getMessageName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#message_name FeatureEngineeringKafkaConfig#message_name}.

---

##### `schemaText`<sup>Required</sup> <a name="schemaText" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema.property.schemaText"></a>

```java
public java.lang.String getSchemaText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#schema_text FeatureEngineeringKafkaConfig#schema_text}.

---

### FeatureEngineeringKafkaConfigProviderConfig <a name="FeatureEngineeringKafkaConfigProviderConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigProviderConfig;

FeatureEngineeringKafkaConfigProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#workspace_id FeatureEngineeringKafkaConfig#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#workspace_id FeatureEngineeringKafkaConfig#workspace_id}.

---

### FeatureEngineeringKafkaConfigSubscriptionMode <a name="FeatureEngineeringKafkaConfigSubscriptionMode" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigSubscriptionMode;

FeatureEngineeringKafkaConfigSubscriptionMode.builder()
//  .assign(java.lang.String)
//  .subscribe(java.lang.String)
//  .subscribePattern(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.assign">assign</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#assign FeatureEngineeringKafkaConfig#assign}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.subscribe">subscribe</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#subscribe FeatureEngineeringKafkaConfig#subscribe}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.subscribePattern">subscribePattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#subscribe_pattern FeatureEngineeringKafkaConfig#subscribe_pattern}. |

---

##### `assign`<sup>Optional</sup> <a name="assign" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.assign"></a>

```java
public java.lang.String getAssign();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#assign FeatureEngineeringKafkaConfig#assign}.

---

##### `subscribe`<sup>Optional</sup> <a name="subscribe" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.subscribe"></a>

```java
public java.lang.String getSubscribe();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#subscribe FeatureEngineeringKafkaConfig#subscribe}.

---

##### `subscribePattern`<sup>Optional</sup> <a name="subscribePattern" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.subscribePattern"></a>

```java
public java.lang.String getSubscribePattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#subscribe_pattern FeatureEngineeringKafkaConfig#subscribe_pattern}.

---

### FeatureEngineeringKafkaConfigValueSchema <a name="FeatureEngineeringKafkaConfigValueSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigValueSchema;

FeatureEngineeringKafkaConfigValueSchema.builder()
//  .avroSchema(java.lang.String)
//  .jsonSchema(java.lang.String)
//  .protoSchema(FeatureEngineeringKafkaConfigValueSchemaProtoSchema)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema.property.avroSchema">avroSchema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#avro_schema FeatureEngineeringKafkaConfig#avro_schema}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema.property.jsonSchema">jsonSchema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema.property.protoSchema">protoSchema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema">FeatureEngineeringKafkaConfigValueSchemaProtoSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#proto_schema FeatureEngineeringKafkaConfig#proto_schema}. |

---

##### `avroSchema`<sup>Optional</sup> <a name="avroSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema.property.avroSchema"></a>

```java
public java.lang.String getAvroSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#avro_schema FeatureEngineeringKafkaConfig#avro_schema}.

---

##### `jsonSchema`<sup>Optional</sup> <a name="jsonSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema.property.jsonSchema"></a>

```java
public java.lang.String getJsonSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}.

---

##### `protoSchema`<sup>Optional</sup> <a name="protoSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema.property.protoSchema"></a>

```java
public FeatureEngineeringKafkaConfigValueSchemaProtoSchema getProtoSchema();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema">FeatureEngineeringKafkaConfigValueSchemaProtoSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#proto_schema FeatureEngineeringKafkaConfig#proto_schema}.

---

### FeatureEngineeringKafkaConfigValueSchemaProtoSchema <a name="FeatureEngineeringKafkaConfigValueSchemaProtoSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigValueSchemaProtoSchema;

FeatureEngineeringKafkaConfigValueSchemaProtoSchema.builder()
    .messageName(java.lang.String)
    .schemaText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema.property.messageName">messageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#message_name FeatureEngineeringKafkaConfig#message_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema.property.schemaText">schemaText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#schema_text FeatureEngineeringKafkaConfig#schema_text}. |

---

##### `messageName`<sup>Required</sup> <a name="messageName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema.property.messageName"></a>

```java
public java.lang.String getMessageName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#message_name FeatureEngineeringKafkaConfig#message_name}.

---

##### `schemaText`<sup>Required</sup> <a name="schemaText" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema.property.schemaText"></a>

```java
public java.lang.String getSchemaText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/feature_engineering_kafka_config#schema_text FeatureEngineeringKafkaConfig#schema_text}.

---

## Classes <a name="Classes" id="Classes"></a>

### FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference <a name="FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference;

new FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.internalValue"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a>

---


### FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference <a name="FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference;

new FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.internalValue"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a>

---


### FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference <a name="FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference;

new FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putKeyPasswordRef">putKeyPasswordRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putKeystorePasswordRef">putKeystorePasswordRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putTruststorePasswordRef">putTruststorePasswordRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.resetDisableHostnameVerification">resetDisableHostnameVerification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKeyPasswordRef` <a name="putKeyPasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putKeyPasswordRef"></a>

```java
public void putKeyPasswordRef(FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putKeyPasswordRef.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a>

---

##### `putKeystorePasswordRef` <a name="putKeystorePasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putKeystorePasswordRef"></a>

```java
public void putKeystorePasswordRef(FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putKeystorePasswordRef.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a>

---

##### `putTruststorePasswordRef` <a name="putTruststorePasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putTruststorePasswordRef"></a>

```java
public void putTruststorePasswordRef(FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putTruststorePasswordRef.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a>

---

##### `resetDisableHostnameVerification` <a name="resetDisableHostnameVerification" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.resetDisableHostnameVerification"></a>

```java
public void resetDisableHostnameVerification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keyPasswordRef">keyPasswordRef</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystorePasswordRef">keystorePasswordRef</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststorePasswordRef">truststorePasswordRef</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.disableHostnameVerificationInput">disableHostnameVerificationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keyPasswordRefInput">keyPasswordRefInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystoreLocationInput">keystoreLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystorePasswordRefInput">keystorePasswordRefInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststoreLocationInput">truststoreLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststorePasswordRefInput">truststorePasswordRefInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.disableHostnameVerification">disableHostnameVerification</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystoreLocation">keystoreLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststoreLocation">truststoreLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig">FeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyPasswordRef`<sup>Required</sup> <a name="keyPasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keyPasswordRef"></a>

```java
public FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference getKeyPasswordRef();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference</a>

---

##### `keystorePasswordRef`<sup>Required</sup> <a name="keystorePasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystorePasswordRef"></a>

```java
public FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference getKeystorePasswordRef();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference</a>

---

##### `truststorePasswordRef`<sup>Required</sup> <a name="truststorePasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststorePasswordRef"></a>

```java
public FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference getTruststorePasswordRef();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference</a>

---

##### `disableHostnameVerificationInput`<sup>Optional</sup> <a name="disableHostnameVerificationInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.disableHostnameVerificationInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableHostnameVerificationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyPasswordRefInput`<sup>Optional</sup> <a name="keyPasswordRefInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keyPasswordRefInput"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef getKeyPasswordRefInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a>

---

##### `keystoreLocationInput`<sup>Optional</sup> <a name="keystoreLocationInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystoreLocationInput"></a>

```java
public java.lang.String getKeystoreLocationInput();
```

- *Type:* java.lang.String

---

##### `keystorePasswordRefInput`<sup>Optional</sup> <a name="keystorePasswordRefInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystorePasswordRefInput"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef getKeystorePasswordRefInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a>

---

##### `truststoreLocationInput`<sup>Optional</sup> <a name="truststoreLocationInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststoreLocationInput"></a>

```java
public java.lang.String getTruststoreLocationInput();
```

- *Type:* java.lang.String

---

##### `truststorePasswordRefInput`<sup>Optional</sup> <a name="truststorePasswordRefInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststorePasswordRefInput"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef getTruststorePasswordRefInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a>

---

##### `disableHostnameVerification`<sup>Required</sup> <a name="disableHostnameVerification" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.disableHostnameVerification"></a>

```java
public java.lang.Boolean|IResolvable getDisableHostnameVerification();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keystoreLocation`<sup>Required</sup> <a name="keystoreLocation" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystoreLocation"></a>

```java
public java.lang.String getKeystoreLocation();
```

- *Type:* java.lang.String

---

##### `truststoreLocation`<sup>Required</sup> <a name="truststoreLocation" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststoreLocation"></a>

```java
public java.lang.String getTruststoreLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigAuthConfigMtlsConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig">FeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a>

---


### FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference <a name="FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference;

new FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.internalValue"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a>

---


### FeatureEngineeringKafkaConfigAuthConfigOutputReference <a name="FeatureEngineeringKafkaConfigAuthConfigOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigAuthConfigOutputReference;

new FeatureEngineeringKafkaConfigAuthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.putMtlsConfig">putMtlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resetMtlsConfig">resetMtlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resetUcServiceCredentialName">resetUcServiceCredentialName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMtlsConfig` <a name="putMtlsConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.putMtlsConfig"></a>

```java
public void putMtlsConfig(FeatureEngineeringKafkaConfigAuthConfigMtlsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.putMtlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig">FeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a>

---

##### `resetMtlsConfig` <a name="resetMtlsConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resetMtlsConfig"></a>

```java
public void resetMtlsConfig()
```

##### `resetUcServiceCredentialName` <a name="resetUcServiceCredentialName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resetUcServiceCredentialName"></a>

```java
public void resetUcServiceCredentialName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.mtlsConfig">mtlsConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.mtlsConfigInput">mtlsConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig">FeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialNameInput">ucServiceCredentialNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialName">ucServiceCredentialName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mtlsConfig`<sup>Required</sup> <a name="mtlsConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.mtlsConfig"></a>

```java
public FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference getMtlsConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference</a>

---

##### `mtlsConfigInput`<sup>Optional</sup> <a name="mtlsConfigInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.mtlsConfigInput"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigAuthConfigMtlsConfig getMtlsConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig">FeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a>

---

##### `ucServiceCredentialNameInput`<sup>Optional</sup> <a name="ucServiceCredentialNameInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialNameInput"></a>

```java
public java.lang.String getUcServiceCredentialNameInput();
```

- *Type:* java.lang.String

---

##### `ucServiceCredentialName`<sup>Required</sup> <a name="ucServiceCredentialName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialName"></a>

```java
public java.lang.String getUcServiceCredentialName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigAuthConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a>

---


### FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference <a name="FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference;

new FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetDataframeSchema">resetDataframeSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetEntityColumns">resetEntityColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetFilterCondition">resetFilterCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetTimeseriesColumn">resetTimeseriesColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetTransformationSql">resetTransformationSql</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataframeSchema` <a name="resetDataframeSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetDataframeSchema"></a>

```java
public void resetDataframeSchema()
```

##### `resetEntityColumns` <a name="resetEntityColumns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetEntityColumns"></a>

```java
public void resetEntityColumns()
```

##### `resetFilterCondition` <a name="resetFilterCondition" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetFilterCondition"></a>

```java
public void resetFilterCondition()
```

##### `resetTimeseriesColumn` <a name="resetTimeseriesColumn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetTimeseriesColumn"></a>

```java
public void resetTimeseriesColumn()
```

##### `resetTransformationSql` <a name="resetTransformationSql" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetTransformationSql"></a>

```java
public void resetTransformationSql()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchemaInput">dataframeSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumnsInput">entityColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.filterConditionInput">filterConditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fullNameInput">fullNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput">timeseriesColumnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSqlInput">transformationSqlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchema">dataframeSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumns">entityColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.filterCondition">filterCondition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fullName">fullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumn">timeseriesColumn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSql">transformationSql</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataframeSchemaInput`<sup>Optional</sup> <a name="dataframeSchemaInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchemaInput"></a>

```java
public java.lang.String getDataframeSchemaInput();
```

- *Type:* java.lang.String

---

##### `entityColumnsInput`<sup>Optional</sup> <a name="entityColumnsInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumnsInput"></a>

```java
public java.util.List<java.lang.String> getEntityColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterConditionInput`<sup>Optional</sup> <a name="filterConditionInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.filterConditionInput"></a>

```java
public java.lang.String getFilterConditionInput();
```

- *Type:* java.lang.String

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fullNameInput"></a>

```java
public java.lang.String getFullNameInput();
```

- *Type:* java.lang.String

---

##### `timeseriesColumnInput`<sup>Optional</sup> <a name="timeseriesColumnInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput"></a>

```java
public java.lang.String getTimeseriesColumnInput();
```

- *Type:* java.lang.String

---

##### `transformationSqlInput`<sup>Optional</sup> <a name="transformationSqlInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSqlInput"></a>

```java
public java.lang.String getTransformationSqlInput();
```

- *Type:* java.lang.String

---

##### `dataframeSchema`<sup>Required</sup> <a name="dataframeSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchema"></a>

```java
public java.lang.String getDataframeSchema();
```

- *Type:* java.lang.String

---

##### `entityColumns`<sup>Required</sup> <a name="entityColumns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumns"></a>

```java
public java.util.List<java.lang.String> getEntityColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterCondition`<sup>Required</sup> <a name="filterCondition" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.filterCondition"></a>

```java
public java.lang.String getFilterCondition();
```

- *Type:* java.lang.String

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

---

##### `timeseriesColumn`<sup>Required</sup> <a name="timeseriesColumn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumn"></a>

```java
public java.lang.String getTimeseriesColumn();
```

- *Type:* java.lang.String

---

##### `transformationSql`<sup>Required</sup> <a name="transformationSql" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSql"></a>

```java
public java.lang.String getTransformationSql();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a>

---


### FeatureEngineeringKafkaConfigBackfillSourceOutputReference <a name="FeatureEngineeringKafkaConfigBackfillSourceOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigBackfillSourceOutputReference;

new FeatureEngineeringKafkaConfigBackfillSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.putDeltaTableSource">putDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.resetDeltaTableName">resetDeltaTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.resetDeltaTableSource">resetDeltaTableSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeltaTableSource` <a name="putDeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.putDeltaTableSource"></a>

```java
public void putDeltaTableSource(FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.putDeltaTableSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a>

---

##### `resetDeltaTableName` <a name="resetDeltaTableName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.resetDeltaTableName"></a>

```java
public void resetDeltaTableName()
```

##### `resetDeltaTableSource` <a name="resetDeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.resetDeltaTableSource"></a>

```java
public void resetDeltaTableSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableSource">deltaTableSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableNameInput">deltaTableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableSourceInput">deltaTableSourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableName">deltaTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deltaTableSource`<sup>Required</sup> <a name="deltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableSource"></a>

```java
public FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference getDeltaTableSource();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference</a>

---

##### `deltaTableNameInput`<sup>Optional</sup> <a name="deltaTableNameInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableNameInput"></a>

```java
public java.lang.String getDeltaTableNameInput();
```

- *Type:* java.lang.String

---

##### `deltaTableSourceInput`<sup>Optional</sup> <a name="deltaTableSourceInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableSourceInput"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource getDeltaTableSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a>

---

##### `deltaTableName`<sup>Required</sup> <a name="deltaTableName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableName"></a>

```java
public java.lang.String getDeltaTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigBackfillSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a>

---


### FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference <a name="FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference;

new FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetDataframeSchema">resetDataframeSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetEntityColumns">resetEntityColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetFilterCondition">resetFilterCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetTimeseriesColumn">resetTimeseriesColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetTransformationSql">resetTransformationSql</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataframeSchema` <a name="resetDataframeSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetDataframeSchema"></a>

```java
public void resetDataframeSchema()
```

##### `resetEntityColumns` <a name="resetEntityColumns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetEntityColumns"></a>

```java
public void resetEntityColumns()
```

##### `resetFilterCondition` <a name="resetFilterCondition" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetFilterCondition"></a>

```java
public void resetFilterCondition()
```

##### `resetTimeseriesColumn` <a name="resetTimeseriesColumn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetTimeseriesColumn"></a>

```java
public void resetTimeseriesColumn()
```

##### `resetTransformationSql` <a name="resetTransformationSql" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetTransformationSql"></a>

```java
public void resetTransformationSql()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchemaInput">dataframeSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumnsInput">entityColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.filterConditionInput">filterConditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.fullNameInput">fullNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput">timeseriesColumnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSqlInput">transformationSqlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchema">dataframeSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumns">entityColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.filterCondition">filterCondition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.fullName">fullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumn">timeseriesColumn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSql">transformationSql</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataframeSchemaInput`<sup>Optional</sup> <a name="dataframeSchemaInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchemaInput"></a>

```java
public java.lang.String getDataframeSchemaInput();
```

- *Type:* java.lang.String

---

##### `entityColumnsInput`<sup>Optional</sup> <a name="entityColumnsInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumnsInput"></a>

```java
public java.util.List<java.lang.String> getEntityColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterConditionInput`<sup>Optional</sup> <a name="filterConditionInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.filterConditionInput"></a>

```java
public java.lang.String getFilterConditionInput();
```

- *Type:* java.lang.String

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.fullNameInput"></a>

```java
public java.lang.String getFullNameInput();
```

- *Type:* java.lang.String

---

##### `timeseriesColumnInput`<sup>Optional</sup> <a name="timeseriesColumnInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput"></a>

```java
public java.lang.String getTimeseriesColumnInput();
```

- *Type:* java.lang.String

---

##### `transformationSqlInput`<sup>Optional</sup> <a name="transformationSqlInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSqlInput"></a>

```java
public java.lang.String getTransformationSqlInput();
```

- *Type:* java.lang.String

---

##### `dataframeSchema`<sup>Required</sup> <a name="dataframeSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchema"></a>

```java
public java.lang.String getDataframeSchema();
```

- *Type:* java.lang.String

---

##### `entityColumns`<sup>Required</sup> <a name="entityColumns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumns"></a>

```java
public java.util.List<java.lang.String> getEntityColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterCondition`<sup>Required</sup> <a name="filterCondition" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.filterCondition"></a>

```java
public java.lang.String getFilterCondition();
```

- *Type:* java.lang.String

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

---

##### `timeseriesColumn`<sup>Required</sup> <a name="timeseriesColumn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumn"></a>

```java
public java.lang.String getTimeseriesColumn();
```

- *Type:* java.lang.String

---

##### `transformationSql`<sup>Required</sup> <a name="transformationSql" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSql"></a>

```java
public java.lang.String getTransformationSql();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource</a>

---


### FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference <a name="FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference;

new FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.putDeltaTableSource">putDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.resetDeltaTableName">resetDeltaTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.resetDeltaTableSource">resetDeltaTableSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeltaTableSource` <a name="putDeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.putDeltaTableSource"></a>

```java
public void putDeltaTableSource(FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.putDeltaTableSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource</a>

---

##### `resetDeltaTableName` <a name="resetDeltaTableName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.resetDeltaTableName"></a>

```java
public void resetDeltaTableName()
```

##### `resetDeltaTableSource` <a name="resetDeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.resetDeltaTableSource"></a>

```java
public void resetDeltaTableSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.deltaTableSource">deltaTableSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.deltaTableNameInput">deltaTableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.deltaTableSourceInput">deltaTableSourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.deltaTableName">deltaTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deltaTableSource`<sup>Required</sup> <a name="deltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.deltaTableSource"></a>

```java
public FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference getDeltaTableSource();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference</a>

---

##### `deltaTableNameInput`<sup>Optional</sup> <a name="deltaTableNameInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.deltaTableNameInput"></a>

```java
public java.lang.String getDeltaTableNameInput();
```

- *Type:* java.lang.String

---

##### `deltaTableSourceInput`<sup>Optional</sup> <a name="deltaTableSourceInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.deltaTableSourceInput"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource getDeltaTableSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource</a>

---

##### `deltaTableName`<sup>Required</sup> <a name="deltaTableName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.deltaTableName"></a>

```java
public java.lang.String getDeltaTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigIngestionConfigBackfillSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSource</a>

---


### FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference <a name="FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference;

new FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.resetDeltaTableName">resetDeltaTableName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeltaTableName` <a name="resetDeltaTableName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.resetDeltaTableName"></a>

```java
public void resetDeltaTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.deltaTableNameInput">deltaTableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.deltaTableName">deltaTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deltaTableNameInput`<sup>Optional</sup> <a name="deltaTableNameInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.deltaTableNameInput"></a>

```java
public java.lang.String getDeltaTableNameInput();
```

- *Type:* java.lang.String

---

##### `deltaTableName`<sup>Required</sup> <a name="deltaTableName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.deltaTableName"></a>

```java
public java.lang.String getDeltaTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination</a>

---


### FeatureEngineeringKafkaConfigIngestionConfigOutputReference <a name="FeatureEngineeringKafkaConfigIngestionConfigOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigIngestionConfigOutputReference;

new FeatureEngineeringKafkaConfigIngestionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.putBackfillSource">putBackfillSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.putIngestionDestination">putIngestionDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.resetBackfillSource">resetBackfillSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.resetDeduplicationColumns">resetDeduplicationColumns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackfillSource` <a name="putBackfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.putBackfillSource"></a>

```java
public void putBackfillSource(FeatureEngineeringKafkaConfigIngestionConfigBackfillSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.putBackfillSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSource</a>

---

##### `putIngestionDestination` <a name="putIngestionDestination" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.putIngestionDestination"></a>

```java
public void putIngestionDestination(FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.putIngestionDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination</a>

---

##### `resetBackfillSource` <a name="resetBackfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.resetBackfillSource"></a>

```java
public void resetBackfillSource()
```

##### `resetDeduplicationColumns` <a name="resetDeduplicationColumns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.resetDeduplicationColumns"></a>

```java
public void resetDeduplicationColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.backfillJobId">backfillJobId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.backfillSource">backfillSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.ingestionDestination">ingestionDestination</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.ingestionJobId">ingestionJobId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.ingestionPipelineId">ingestionPipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.backfillSourceInput">backfillSourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.deduplicationColumnsInput">deduplicationColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.ingestionDestinationInput">ingestionDestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.deduplicationColumns">deduplicationColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig">FeatureEngineeringKafkaConfigIngestionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backfillJobId`<sup>Required</sup> <a name="backfillJobId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.backfillJobId"></a>

```java
public java.lang.Number getBackfillJobId();
```

- *Type:* java.lang.Number

---

##### `backfillSource`<sup>Required</sup> <a name="backfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.backfillSource"></a>

```java
public FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference getBackfillSource();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference</a>

---

##### `ingestionDestination`<sup>Required</sup> <a name="ingestionDestination" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.ingestionDestination"></a>

```java
public FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference getIngestionDestination();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference</a>

---

##### `ingestionJobId`<sup>Required</sup> <a name="ingestionJobId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.ingestionJobId"></a>

```java
public java.lang.Number getIngestionJobId();
```

- *Type:* java.lang.Number

---

##### `ingestionPipelineId`<sup>Required</sup> <a name="ingestionPipelineId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.ingestionPipelineId"></a>

```java
public java.lang.String getIngestionPipelineId();
```

- *Type:* java.lang.String

---

##### `backfillSourceInput`<sup>Optional</sup> <a name="backfillSourceInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.backfillSourceInput"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigIngestionConfigBackfillSource getBackfillSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSource</a>

---

##### `deduplicationColumnsInput`<sup>Optional</sup> <a name="deduplicationColumnsInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.deduplicationColumnsInput"></a>

```java
public java.util.List<java.lang.String> getDeduplicationColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ingestionDestinationInput`<sup>Optional</sup> <a name="ingestionDestinationInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.ingestionDestinationInput"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination getIngestionDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination</a>

---

##### `deduplicationColumns`<sup>Required</sup> <a name="deduplicationColumns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.deduplicationColumns"></a>

```java
public java.util.List<java.lang.String> getDeduplicationColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigIngestionConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig">FeatureEngineeringKafkaConfigIngestionConfig</a>

---


### FeatureEngineeringKafkaConfigKeySchemaOutputReference <a name="FeatureEngineeringKafkaConfigKeySchemaOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigKeySchemaOutputReference;

new FeatureEngineeringKafkaConfigKeySchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.putProtoSchema">putProtoSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resetAvroSchema">resetAvroSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resetJsonSchema">resetJsonSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resetProtoSchema">resetProtoSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProtoSchema` <a name="putProtoSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.putProtoSchema"></a>

```java
public void putProtoSchema(FeatureEngineeringKafkaConfigKeySchemaProtoSchema value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.putProtoSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema">FeatureEngineeringKafkaConfigKeySchemaProtoSchema</a>

---

##### `resetAvroSchema` <a name="resetAvroSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resetAvroSchema"></a>

```java
public void resetAvroSchema()
```

##### `resetJsonSchema` <a name="resetJsonSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resetJsonSchema"></a>

```java
public void resetJsonSchema()
```

##### `resetProtoSchema` <a name="resetProtoSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resetProtoSchema"></a>

```java
public void resetProtoSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.protoSchema">protoSchema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference">FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.avroSchemaInput">avroSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchemaInput">jsonSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.protoSchemaInput">protoSchemaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema">FeatureEngineeringKafkaConfigKeySchemaProtoSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.avroSchema">avroSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchema">jsonSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `protoSchema`<sup>Required</sup> <a name="protoSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.protoSchema"></a>

```java
public FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference getProtoSchema();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference">FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference</a>

---

##### `avroSchemaInput`<sup>Optional</sup> <a name="avroSchemaInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.avroSchemaInput"></a>

```java
public java.lang.String getAvroSchemaInput();
```

- *Type:* java.lang.String

---

##### `jsonSchemaInput`<sup>Optional</sup> <a name="jsonSchemaInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchemaInput"></a>

```java
public java.lang.String getJsonSchemaInput();
```

- *Type:* java.lang.String

---

##### `protoSchemaInput`<sup>Optional</sup> <a name="protoSchemaInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.protoSchemaInput"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigKeySchemaProtoSchema getProtoSchemaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema">FeatureEngineeringKafkaConfigKeySchemaProtoSchema</a>

---

##### `avroSchema`<sup>Required</sup> <a name="avroSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.avroSchema"></a>

```java
public java.lang.String getAvroSchema();
```

- *Type:* java.lang.String

---

##### `jsonSchema`<sup>Required</sup> <a name="jsonSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchema"></a>

```java
public java.lang.String getJsonSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.internalValue"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigKeySchema getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a>

---


### FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference <a name="FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference;

new FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.messageNameInput">messageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.schemaTextInput">schemaTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.messageName">messageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.schemaText">schemaText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema">FeatureEngineeringKafkaConfigKeySchemaProtoSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `messageNameInput`<sup>Optional</sup> <a name="messageNameInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.messageNameInput"></a>

```java
public java.lang.String getMessageNameInput();
```

- *Type:* java.lang.String

---

##### `schemaTextInput`<sup>Optional</sup> <a name="schemaTextInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.schemaTextInput"></a>

```java
public java.lang.String getSchemaTextInput();
```

- *Type:* java.lang.String

---

##### `messageName`<sup>Required</sup> <a name="messageName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.messageName"></a>

```java
public java.lang.String getMessageName();
```

- *Type:* java.lang.String

---

##### `schemaText`<sup>Required</sup> <a name="schemaText" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.schemaText"></a>

```java
public java.lang.String getSchemaText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchemaOutputReference.property.internalValue"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigKeySchemaProtoSchema getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaProtoSchema">FeatureEngineeringKafkaConfigKeySchemaProtoSchema</a>

---


### FeatureEngineeringKafkaConfigProviderConfigOutputReference <a name="FeatureEngineeringKafkaConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigProviderConfigOutputReference;

new FeatureEngineeringKafkaConfigProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a>

---


### FeatureEngineeringKafkaConfigSubscriptionModeOutputReference <a name="FeatureEngineeringKafkaConfigSubscriptionModeOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference;

new FeatureEngineeringKafkaConfigSubscriptionModeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetAssign">resetAssign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribe">resetSubscribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribePattern">resetSubscribePattern</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssign` <a name="resetAssign" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetAssign"></a>

```java
public void resetAssign()
```

##### `resetSubscribe` <a name="resetSubscribe" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribe"></a>

```java
public void resetSubscribe()
```

##### `resetSubscribePattern` <a name="resetSubscribePattern" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribePattern"></a>

```java
public void resetSubscribePattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assignInput">assignInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribeInput">subscribeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePatternInput">subscribePatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assign">assign</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribe">subscribe</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePattern">subscribePattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assignInput`<sup>Optional</sup> <a name="assignInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assignInput"></a>

```java
public java.lang.String getAssignInput();
```

- *Type:* java.lang.String

---

##### `subscribeInput`<sup>Optional</sup> <a name="subscribeInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribeInput"></a>

```java
public java.lang.String getSubscribeInput();
```

- *Type:* java.lang.String

---

##### `subscribePatternInput`<sup>Optional</sup> <a name="subscribePatternInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePatternInput"></a>

```java
public java.lang.String getSubscribePatternInput();
```

- *Type:* java.lang.String

---

##### `assign`<sup>Required</sup> <a name="assign" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assign"></a>

```java
public java.lang.String getAssign();
```

- *Type:* java.lang.String

---

##### `subscribe`<sup>Required</sup> <a name="subscribe" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribe"></a>

```java
public java.lang.String getSubscribe();
```

- *Type:* java.lang.String

---

##### `subscribePattern`<sup>Required</sup> <a name="subscribePattern" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePattern"></a>

```java
public java.lang.String getSubscribePattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.internalValue"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigSubscriptionMode getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a>

---


### FeatureEngineeringKafkaConfigValueSchemaOutputReference <a name="FeatureEngineeringKafkaConfigValueSchemaOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigValueSchemaOutputReference;

new FeatureEngineeringKafkaConfigValueSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.putProtoSchema">putProtoSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resetAvroSchema">resetAvroSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resetJsonSchema">resetJsonSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resetProtoSchema">resetProtoSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProtoSchema` <a name="putProtoSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.putProtoSchema"></a>

```java
public void putProtoSchema(FeatureEngineeringKafkaConfigValueSchemaProtoSchema value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.putProtoSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema">FeatureEngineeringKafkaConfigValueSchemaProtoSchema</a>

---

##### `resetAvroSchema` <a name="resetAvroSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resetAvroSchema"></a>

```java
public void resetAvroSchema()
```

##### `resetJsonSchema` <a name="resetJsonSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resetJsonSchema"></a>

```java
public void resetJsonSchema()
```

##### `resetProtoSchema` <a name="resetProtoSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resetProtoSchema"></a>

```java
public void resetProtoSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.protoSchema">protoSchema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference">FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.avroSchemaInput">avroSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchemaInput">jsonSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.protoSchemaInput">protoSchemaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema">FeatureEngineeringKafkaConfigValueSchemaProtoSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.avroSchema">avroSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchema">jsonSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `protoSchema`<sup>Required</sup> <a name="protoSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.protoSchema"></a>

```java
public FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference getProtoSchema();
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference">FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference</a>

---

##### `avroSchemaInput`<sup>Optional</sup> <a name="avroSchemaInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.avroSchemaInput"></a>

```java
public java.lang.String getAvroSchemaInput();
```

- *Type:* java.lang.String

---

##### `jsonSchemaInput`<sup>Optional</sup> <a name="jsonSchemaInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchemaInput"></a>

```java
public java.lang.String getJsonSchemaInput();
```

- *Type:* java.lang.String

---

##### `protoSchemaInput`<sup>Optional</sup> <a name="protoSchemaInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.protoSchemaInput"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigValueSchemaProtoSchema getProtoSchemaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema">FeatureEngineeringKafkaConfigValueSchemaProtoSchema</a>

---

##### `avroSchema`<sup>Required</sup> <a name="avroSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.avroSchema"></a>

```java
public java.lang.String getAvroSchema();
```

- *Type:* java.lang.String

---

##### `jsonSchema`<sup>Required</sup> <a name="jsonSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchema"></a>

```java
public java.lang.String getJsonSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.internalValue"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigValueSchema getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a>

---


### FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference <a name="FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.feature_engineering_kafka_config.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference;

new FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.messageNameInput">messageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.schemaTextInput">schemaTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.messageName">messageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.schemaText">schemaText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema">FeatureEngineeringKafkaConfigValueSchemaProtoSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `messageNameInput`<sup>Optional</sup> <a name="messageNameInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.messageNameInput"></a>

```java
public java.lang.String getMessageNameInput();
```

- *Type:* java.lang.String

---

##### `schemaTextInput`<sup>Optional</sup> <a name="schemaTextInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.schemaTextInput"></a>

```java
public java.lang.String getSchemaTextInput();
```

- *Type:* java.lang.String

---

##### `messageName`<sup>Required</sup> <a name="messageName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.messageName"></a>

```java
public java.lang.String getMessageName();
```

- *Type:* java.lang.String

---

##### `schemaText`<sup>Required</sup> <a name="schemaText" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.schemaText"></a>

```java
public java.lang.String getSchemaText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchemaOutputReference.property.internalValue"></a>

```java
public IResolvable|FeatureEngineeringKafkaConfigValueSchemaProtoSchema getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaProtoSchema">FeatureEngineeringKafkaConfigValueSchemaProtoSchema</a>

---



