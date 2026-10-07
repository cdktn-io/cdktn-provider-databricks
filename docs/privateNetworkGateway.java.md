# `privateNetworkGateway` Submodule <a name="`privateNetworkGateway` Submodule" id="@cdktn/provider-databricks.privateNetworkGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateNetworkGateway <a name="PrivateNetworkGateway" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway databricks_private_network_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer"></a>

```java
import io.cdktn.providers.databricks.private_network_gateway.PrivateNetworkGateway;

PrivateNetworkGateway.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .parent(java.lang.String)
    .trafficMode(java.lang.String)
//  .awsCloudConnection(PrivateNetworkGatewayAwsCloudConnection)
//  .azureCloudConnection(PrivateNetworkGatewayAzureCloudConnection)
//  .bandwidthTierGigabitsPerSecond(java.lang.Number)
//  .destinations(IResolvable|java.util.List<PrivateNetworkGatewayDestinations>)
//  .privateDnsResolvers(IResolvable|java.util.List<PrivateNetworkGatewayPrivateDnsResolvers>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#display_name PrivateNetworkGateway#display_name}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#parent PrivateNetworkGateway#parent}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.trafficMode">trafficMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#traffic_mode PrivateNetworkGateway#traffic_mode}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.awsCloudConnection">awsCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#aws_cloud_connection PrivateNetworkGateway#aws_cloud_connection}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.azureCloudConnection">azureCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#azure_cloud_connection PrivateNetworkGateway#azure_cloud_connection}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.bandwidthTierGigabitsPerSecond">bandwidthTierGigabitsPerSecond</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#bandwidth_tier_gigabits_per_second PrivateNetworkGateway#bandwidth_tier_gigabits_per_second}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.destinations">destinations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#destinations PrivateNetworkGateway#destinations}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.privateDnsResolvers">privateDnsResolvers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#private_dns_resolvers PrivateNetworkGateway#private_dns_resolvers}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#display_name PrivateNetworkGateway#display_name}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#parent PrivateNetworkGateway#parent}.

---

##### `trafficMode`<sup>Required</sup> <a name="trafficMode" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.trafficMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#traffic_mode PrivateNetworkGateway#traffic_mode}.

---

##### `awsCloudConnection`<sup>Optional</sup> <a name="awsCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.awsCloudConnection"></a>

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#aws_cloud_connection PrivateNetworkGateway#aws_cloud_connection}.

---

##### `azureCloudConnection`<sup>Optional</sup> <a name="azureCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.azureCloudConnection"></a>

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#azure_cloud_connection PrivateNetworkGateway#azure_cloud_connection}.

---

##### `bandwidthTierGigabitsPerSecond`<sup>Optional</sup> <a name="bandwidthTierGigabitsPerSecond" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.bandwidthTierGigabitsPerSecond"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#bandwidth_tier_gigabits_per_second PrivateNetworkGateway#bandwidth_tier_gigabits_per_second}.

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.destinations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#destinations PrivateNetworkGateway#destinations}.

---

##### `privateDnsResolvers`<sup>Optional</sup> <a name="privateDnsResolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.privateDnsResolvers"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#private_dns_resolvers PrivateNetworkGateway#private_dns_resolvers}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAwsCloudConnection">putAwsCloudConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAzureCloudConnection">putAzureCloudConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putPrivateDnsResolvers">putPrivateDnsResolvers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetAwsCloudConnection">resetAwsCloudConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetAzureCloudConnection">resetAzureCloudConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetBandwidthTierGigabitsPerSecond">resetBandwidthTierGigabitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetPrivateDnsResolvers">resetPrivateDnsResolvers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAwsCloudConnection` <a name="putAwsCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAwsCloudConnection"></a>

```java
public void putAwsCloudConnection(PrivateNetworkGatewayAwsCloudConnection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAwsCloudConnection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a>

---

##### `putAzureCloudConnection` <a name="putAzureCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAzureCloudConnection"></a>

```java
public void putAzureCloudConnection(PrivateNetworkGatewayAzureCloudConnection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAzureCloudConnection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a>

---

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putDestinations"></a>

```java
public void putDestinations(IResolvable|java.util.List<PrivateNetworkGatewayDestinations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putDestinations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>>

---

##### `putPrivateDnsResolvers` <a name="putPrivateDnsResolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putPrivateDnsResolvers"></a>

```java
public void putPrivateDnsResolvers(IResolvable|java.util.List<PrivateNetworkGatewayPrivateDnsResolvers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putPrivateDnsResolvers.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>>

---

##### `resetAwsCloudConnection` <a name="resetAwsCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetAwsCloudConnection"></a>

```java
public void resetAwsCloudConnection()
```

##### `resetAzureCloudConnection` <a name="resetAzureCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetAzureCloudConnection"></a>

```java
public void resetAzureCloudConnection()
```

##### `resetBandwidthTierGigabitsPerSecond` <a name="resetBandwidthTierGigabitsPerSecond" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetBandwidthTierGigabitsPerSecond"></a>

```java
public void resetBandwidthTierGigabitsPerSecond()
```

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetDestinations"></a>

```java
public void resetDestinations()
```

##### `resetPrivateDnsResolvers` <a name="resetPrivateDnsResolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetPrivateDnsResolvers"></a>

```java
public void resetPrivateDnsResolvers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PrivateNetworkGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isConstruct"></a>

```java
import io.cdktn.providers.databricks.private_network_gateway.PrivateNetworkGateway;

PrivateNetworkGateway.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.private_network_gateway.PrivateNetworkGateway;

PrivateNetworkGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.private_network_gateway.PrivateNetworkGateway;

PrivateNetworkGateway.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.private_network_gateway.PrivateNetworkGateway;

PrivateNetworkGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PrivateNetworkGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PrivateNetworkGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PrivateNetworkGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PrivateNetworkGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PrivateNetworkGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.awsCloudConnection">awsCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference">PrivateNetworkGatewayAwsCloudConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.azureCloudConnection">azureCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference">PrivateNetworkGatewayAzureCloudConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList">PrivateNetworkGatewayDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.privateDnsResolvers">privateDnsResolvers</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList">PrivateNetworkGatewayPrivateDnsResolversList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.awsCloudConnectionInput">awsCloudConnectionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.azureCloudConnectionInput">azureCloudConnectionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.bandwidthTierGigabitsPerSecondInput">bandwidthTierGigabitsPerSecondInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.destinationsInput">destinationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.privateDnsResolversInput">privateDnsResolversInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.trafficModeInput">trafficModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.bandwidthTierGigabitsPerSecond">bandwidthTierGigabitsPerSecond</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.trafficMode">trafficMode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `awsCloudConnection`<sup>Required</sup> <a name="awsCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.awsCloudConnection"></a>

```java
public PrivateNetworkGatewayAwsCloudConnectionOutputReference getAwsCloudConnection();
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference">PrivateNetworkGatewayAwsCloudConnectionOutputReference</a>

---

##### `azureCloudConnection`<sup>Required</sup> <a name="azureCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.azureCloudConnection"></a>

```java
public PrivateNetworkGatewayAzureCloudConnectionOutputReference getAzureCloudConnection();
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference">PrivateNetworkGatewayAzureCloudConnectionOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.destinations"></a>

```java
public PrivateNetworkGatewayDestinationsList getDestinations();
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList">PrivateNetworkGatewayDestinationsList</a>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privateDnsResolvers`<sup>Required</sup> <a name="privateDnsResolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.privateDnsResolvers"></a>

```java
public PrivateNetworkGatewayPrivateDnsResolversList getPrivateDnsResolvers();
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList">PrivateNetworkGatewayPrivateDnsResolversList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `awsCloudConnectionInput`<sup>Optional</sup> <a name="awsCloudConnectionInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.awsCloudConnectionInput"></a>

```java
public IResolvable|PrivateNetworkGatewayAwsCloudConnection getAwsCloudConnectionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a>

---

##### `azureCloudConnectionInput`<sup>Optional</sup> <a name="azureCloudConnectionInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.azureCloudConnectionInput"></a>

```java
public IResolvable|PrivateNetworkGatewayAzureCloudConnection getAzureCloudConnectionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a>

---

##### `bandwidthTierGigabitsPerSecondInput`<sup>Optional</sup> <a name="bandwidthTierGigabitsPerSecondInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.bandwidthTierGigabitsPerSecondInput"></a>

```java
public java.lang.Number getBandwidthTierGigabitsPerSecondInput();
```

- *Type:* java.lang.Number

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.destinationsInput"></a>

```java
public IResolvable|java.util.List<PrivateNetworkGatewayDestinations> getDestinationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `privateDnsResolversInput`<sup>Optional</sup> <a name="privateDnsResolversInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.privateDnsResolversInput"></a>

```java
public IResolvable|java.util.List<PrivateNetworkGatewayPrivateDnsResolvers> getPrivateDnsResolversInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>>

---

##### `trafficModeInput`<sup>Optional</sup> <a name="trafficModeInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.trafficModeInput"></a>

```java
public java.lang.String getTrafficModeInput();
```

- *Type:* java.lang.String

---

##### `bandwidthTierGigabitsPerSecond`<sup>Required</sup> <a name="bandwidthTierGigabitsPerSecond" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.bandwidthTierGigabitsPerSecond"></a>

```java
public java.lang.Number getBandwidthTierGigabitsPerSecond();
```

- *Type:* java.lang.Number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `trafficMode`<sup>Required</sup> <a name="trafficMode" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.trafficMode"></a>

```java
public java.lang.String getTrafficMode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateNetworkGatewayAwsCloudConnection <a name="PrivateNetworkGatewayAwsCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.Initializer"></a>

```java
import io.cdktn.providers.databricks.private_network_gateway.PrivateNetworkGatewayAwsCloudConnection;

PrivateNetworkGatewayAwsCloudConnection.builder()
    .crossAccountRole(PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole)
    .gatewaySubnets(IResolvable|java.util.List<PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets>)
    .securityGroupIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.crossAccountRole">crossAccountRole</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#cross_account_role PrivateNetworkGateway#cross_account_role}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.gatewaySubnets">gatewaySubnets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#gateway_subnets PrivateNetworkGateway#gateway_subnets}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#security_group_ids PrivateNetworkGateway#security_group_ids}. |

---

##### `crossAccountRole`<sup>Required</sup> <a name="crossAccountRole" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.crossAccountRole"></a>

```java
public PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole getCrossAccountRole();
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#cross_account_role PrivateNetworkGateway#cross_account_role}.

---

##### `gatewaySubnets`<sup>Required</sup> <a name="gatewaySubnets" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.gatewaySubnets"></a>

```java
public IResolvable|java.util.List<PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets> getGatewaySubnets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#gateway_subnets PrivateNetworkGateway#gateway_subnets}.

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#security_group_ids PrivateNetworkGateway#security_group_ids}.

---

### PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole <a name="PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole.Initializer"></a>

```java
import io.cdktn.providers.databricks.private_network_gateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole;

PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole.builder()
    .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#role_arn PrivateNetworkGateway#role_arn}. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#role_arn PrivateNetworkGateway#role_arn}.

---

### PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets <a name="PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets.Initializer"></a>

```java
import io.cdktn.providers.databricks.private_network_gateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets;

PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets.builder()
    .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#subnet_id PrivateNetworkGateway#subnet_id}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#subnet_id PrivateNetworkGateway#subnet_id}.

---

### PrivateNetworkGatewayAzureCloudConnection <a name="PrivateNetworkGatewayAzureCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection.Initializer"></a>

```java
import io.cdktn.providers.databricks.private_network_gateway.PrivateNetworkGatewayAzureCloudConnection;

PrivateNetworkGatewayAzureCloudConnection.builder()
    .gatewaySubnet(PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection.property.gatewaySubnet">gatewaySubnet</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#gateway_subnet PrivateNetworkGateway#gateway_subnet}. |

---

##### `gatewaySubnet`<sup>Required</sup> <a name="gatewaySubnet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection.property.gatewaySubnet"></a>

```java
public PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet getGatewaySubnet();
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#gateway_subnet PrivateNetworkGateway#gateway_subnet}.

---

### PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet <a name="PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet.Initializer"></a>

```java
import io.cdktn.providers.databricks.private_network_gateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet;

PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet.builder()
    .resourceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#resource_id PrivateNetworkGateway#resource_id}. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#resource_id PrivateNetworkGateway#resource_id}.

---

### PrivateNetworkGatewayConfig <a name="PrivateNetworkGatewayConfig" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.private_network_gateway.PrivateNetworkGatewayConfig;

PrivateNetworkGatewayConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .parent(java.lang.String)
    .trafficMode(java.lang.String)
//  .awsCloudConnection(PrivateNetworkGatewayAwsCloudConnection)
//  .azureCloudConnection(PrivateNetworkGatewayAzureCloudConnection)
//  .bandwidthTierGigabitsPerSecond(java.lang.Number)
//  .destinations(IResolvable|java.util.List<PrivateNetworkGatewayDestinations>)
//  .privateDnsResolvers(IResolvable|java.util.List<PrivateNetworkGatewayPrivateDnsResolvers>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#display_name PrivateNetworkGateway#display_name}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#parent PrivateNetworkGateway#parent}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.trafficMode">trafficMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#traffic_mode PrivateNetworkGateway#traffic_mode}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.awsCloudConnection">awsCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#aws_cloud_connection PrivateNetworkGateway#aws_cloud_connection}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.azureCloudConnection">azureCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#azure_cloud_connection PrivateNetworkGateway#azure_cloud_connection}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.bandwidthTierGigabitsPerSecond">bandwidthTierGigabitsPerSecond</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#bandwidth_tier_gigabits_per_second PrivateNetworkGateway#bandwidth_tier_gigabits_per_second}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.destinations">destinations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#destinations PrivateNetworkGateway#destinations}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.privateDnsResolvers">privateDnsResolvers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#private_dns_resolvers PrivateNetworkGateway#private_dns_resolvers}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#display_name PrivateNetworkGateway#display_name}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#parent PrivateNetworkGateway#parent}.

---

##### `trafficMode`<sup>Required</sup> <a name="trafficMode" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.trafficMode"></a>

```java
public java.lang.String getTrafficMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#traffic_mode PrivateNetworkGateway#traffic_mode}.

---

##### `awsCloudConnection`<sup>Optional</sup> <a name="awsCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.awsCloudConnection"></a>

```java
public PrivateNetworkGatewayAwsCloudConnection getAwsCloudConnection();
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#aws_cloud_connection PrivateNetworkGateway#aws_cloud_connection}.

---

##### `azureCloudConnection`<sup>Optional</sup> <a name="azureCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.azureCloudConnection"></a>

```java
public PrivateNetworkGatewayAzureCloudConnection getAzureCloudConnection();
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#azure_cloud_connection PrivateNetworkGateway#azure_cloud_connection}.

---

##### `bandwidthTierGigabitsPerSecond`<sup>Optional</sup> <a name="bandwidthTierGigabitsPerSecond" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.bandwidthTierGigabitsPerSecond"></a>

```java
public java.lang.Number getBandwidthTierGigabitsPerSecond();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#bandwidth_tier_gigabits_per_second PrivateNetworkGateway#bandwidth_tier_gigabits_per_second}.

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.destinations"></a>

```java
public IResolvable|java.util.List<PrivateNetworkGatewayDestinations> getDestinations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#destinations PrivateNetworkGateway#destinations}.

---

##### `privateDnsResolvers`<sup>Optional</sup> <a name="privateDnsResolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.privateDnsResolvers"></a>

```java
public IResolvable|java.util.List<PrivateNetworkGatewayPrivateDnsResolvers> getPrivateDnsResolvers();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#private_dns_resolvers PrivateNetworkGateway#private_dns_resolvers}.

---

### PrivateNetworkGatewayDestinations <a name="PrivateNetworkGatewayDestinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations.Initializer"></a>

```java
import io.cdktn.providers.databricks.private_network_gateway.PrivateNetworkGatewayDestinations;

PrivateNetworkGatewayDestinations.builder()
    .destinationType(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#destination_type PrivateNetworkGateway#destination_type}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#value PrivateNetworkGateway#value}. |

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#destination_type PrivateNetworkGateway#destination_type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#value PrivateNetworkGateway#value}.

---

### PrivateNetworkGatewayPrivateDnsResolvers <a name="PrivateNetworkGatewayPrivateDnsResolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers.Initializer"></a>

```java
import io.cdktn.providers.databricks.private_network_gateway.PrivateNetworkGatewayPrivateDnsResolvers;

PrivateNetworkGatewayPrivateDnsResolvers.builder()
    .resolverType(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers.property.resolverType">resolverType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#resolver_type PrivateNetworkGateway#resolver_type}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#value PrivateNetworkGateway#value}. |

---

##### `resolverType`<sup>Required</sup> <a name="resolverType" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers.property.resolverType"></a>

```java
public java.lang.String getResolverType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#resolver_type PrivateNetworkGateway#resolver_type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#value PrivateNetworkGateway#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference <a name="PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.private_network_gateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference;

new PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.internalValue"></a>

```java
public IResolvable|PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

---


### PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList <a name="PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.private_network_gateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList;

new PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.get"></a>

```java
public PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>>

---


### PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference <a name="PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.private_network_gateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference;

new PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.internalValue"></a>

```java
public IResolvable|PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>

---


### PrivateNetworkGatewayAwsCloudConnectionOutputReference <a name="PrivateNetworkGatewayAwsCloudConnectionOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.private_network_gateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference;

new PrivateNetworkGatewayAwsCloudConnectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putCrossAccountRole">putCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putGatewaySubnets">putGatewaySubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCrossAccountRole` <a name="putCrossAccountRole" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putCrossAccountRole"></a>

```java
public void putCrossAccountRole(PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putCrossAccountRole.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

---

##### `putGatewaySubnets` <a name="putGatewaySubnets" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putGatewaySubnets"></a>

```java
public void putGatewaySubnets(IResolvable|java.util.List<PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putGatewaySubnets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRole">crossAccountRole</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnets">gatewaySubnets</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRoleInput">crossAccountRoleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnetsInput">gatewaySubnetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `crossAccountRole`<sup>Required</sup> <a name="crossAccountRole" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRole"></a>

```java
public PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference getCrossAccountRole();
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference</a>

---

##### `gatewaySubnets`<sup>Required</sup> <a name="gatewaySubnets" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnets"></a>

```java
public PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList getGatewaySubnets();
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList</a>

---

##### `crossAccountRoleInput`<sup>Optional</sup> <a name="crossAccountRoleInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRoleInput"></a>

```java
public IResolvable|PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole getCrossAccountRoleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

---

##### `gatewaySubnetsInput`<sup>Optional</sup> <a name="gatewaySubnetsInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnetsInput"></a>

```java
public IResolvable|java.util.List<PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets> getGatewaySubnetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>>

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.internalValue"></a>

```java
public IResolvable|PrivateNetworkGatewayAwsCloudConnection getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a>

---


### PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference <a name="PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.private_network_gateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference;

new PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.internalValue"></a>

```java
public IResolvable|PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

---


### PrivateNetworkGatewayAzureCloudConnectionOutputReference <a name="PrivateNetworkGatewayAzureCloudConnectionOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.private_network_gateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference;

new PrivateNetworkGatewayAzureCloudConnectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.putGatewaySubnet">putGatewaySubnet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGatewaySubnet` <a name="putGatewaySubnet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.putGatewaySubnet"></a>

```java
public void putGatewaySubnet(PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.putGatewaySubnet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnet">gatewaySubnet</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnetInput">gatewaySubnetInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gatewaySubnet`<sup>Required</sup> <a name="gatewaySubnet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnet"></a>

```java
public PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference getGatewaySubnet();
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference</a>

---

##### `gatewaySubnetInput`<sup>Optional</sup> <a name="gatewaySubnetInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnetInput"></a>

```java
public IResolvable|PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet getGatewaySubnetInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.internalValue"></a>

```java
public IResolvable|PrivateNetworkGatewayAzureCloudConnection getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a>

---


### PrivateNetworkGatewayDestinationsList <a name="PrivateNetworkGatewayDestinationsList" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.private_network_gateway.PrivateNetworkGatewayDestinationsList;

new PrivateNetworkGatewayDestinationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.get"></a>

```java
public PrivateNetworkGatewayDestinationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PrivateNetworkGatewayDestinations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>>

---


### PrivateNetworkGatewayDestinationsOutputReference <a name="PrivateNetworkGatewayDestinationsOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.private_network_gateway.PrivateNetworkGatewayDestinationsOutputReference;

new PrivateNetworkGatewayDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.destinationTypeInput">destinationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.destinationTypeInput"></a>

```java
public java.lang.String getDestinationTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.internalValue"></a>

```java
public IResolvable|PrivateNetworkGatewayDestinations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>

---


### PrivateNetworkGatewayPrivateDnsResolversList <a name="PrivateNetworkGatewayPrivateDnsResolversList" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer"></a>

```java
import io.cdktn.providers.databricks.private_network_gateway.PrivateNetworkGatewayPrivateDnsResolversList;

new PrivateNetworkGatewayPrivateDnsResolversList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.get"></a>

```java
public PrivateNetworkGatewayPrivateDnsResolversOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PrivateNetworkGatewayPrivateDnsResolvers> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>>

---


### PrivateNetworkGatewayPrivateDnsResolversOutputReference <a name="PrivateNetworkGatewayPrivateDnsResolversOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.private_network_gateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference;

new PrivateNetworkGatewayPrivateDnsResolversOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverTypeInput">resolverTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverType">resolverType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resolverTypeInput`<sup>Optional</sup> <a name="resolverTypeInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverTypeInput"></a>

```java
public java.lang.String getResolverTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `resolverType`<sup>Required</sup> <a name="resolverType" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverType"></a>

```java
public java.lang.String getResolverType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.internalValue"></a>

```java
public IResolvable|PrivateNetworkGatewayPrivateDnsResolvers getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>

---



