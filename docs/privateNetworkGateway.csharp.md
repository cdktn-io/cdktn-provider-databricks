# `privateNetworkGateway` Submodule <a name="`privateNetworkGateway` Submodule" id="@cdktn/provider-databricks.privateNetworkGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateNetworkGateway <a name="PrivateNetworkGateway" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway databricks_private_network_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PrivateNetworkGateway(Construct Scope, string Id, PrivateNetworkGatewayConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig">PrivateNetworkGatewayConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig">PrivateNetworkGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAwsCloudConnection">PutAwsCloudConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAzureCloudConnection">PutAzureCloudConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putPrivateDnsResolvers">PutPrivateDnsResolvers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetAwsCloudConnection">ResetAwsCloudConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetAzureCloudConnection">ResetAzureCloudConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetBandwidthTierGigabitsPerSecond">ResetBandwidthTierGigabitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetPrivateDnsResolvers">ResetPrivateDnsResolvers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAwsCloudConnection` <a name="PutAwsCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAwsCloudConnection"></a>

```csharp
private void PutAwsCloudConnection(PrivateNetworkGatewayAwsCloudConnection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAwsCloudConnection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a>

---

##### `PutAzureCloudConnection` <a name="PutAzureCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAzureCloudConnection"></a>

```csharp
private void PutAzureCloudConnection(PrivateNetworkGatewayAzureCloudConnection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAzureCloudConnection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a>

---

##### `PutDestinations` <a name="PutDestinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putDestinations"></a>

```csharp
private void PutDestinations(IResolvable|PrivateNetworkGatewayDestinations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putDestinations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>[]

---

##### `PutPrivateDnsResolvers` <a name="PutPrivateDnsResolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putPrivateDnsResolvers"></a>

```csharp
private void PutPrivateDnsResolvers(IResolvable|PrivateNetworkGatewayPrivateDnsResolvers[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putPrivateDnsResolvers.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>[]

---

##### `ResetAwsCloudConnection` <a name="ResetAwsCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetAwsCloudConnection"></a>

```csharp
private void ResetAwsCloudConnection()
```

##### `ResetAzureCloudConnection` <a name="ResetAzureCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetAzureCloudConnection"></a>

```csharp
private void ResetAzureCloudConnection()
```

##### `ResetBandwidthTierGigabitsPerSecond` <a name="ResetBandwidthTierGigabitsPerSecond" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetBandwidthTierGigabitsPerSecond"></a>

```csharp
private void ResetBandwidthTierGigabitsPerSecond()
```

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetDestinations"></a>

```csharp
private void ResetDestinations()
```

##### `ResetPrivateDnsResolvers` <a name="ResetPrivateDnsResolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetPrivateDnsResolvers"></a>

```csharp
private void ResetPrivateDnsResolvers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PrivateNetworkGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

PrivateNetworkGateway.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

PrivateNetworkGateway.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

PrivateNetworkGateway.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

PrivateNetworkGateway.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PrivateNetworkGateway resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivateNetworkGateway to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivateNetworkGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PrivateNetworkGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.awsCloudConnection">AwsCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference">PrivateNetworkGatewayAwsCloudConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.azureCloudConnection">AzureCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference">PrivateNetworkGatewayAzureCloudConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList">PrivateNetworkGatewayDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.privateDnsResolvers">PrivateDnsResolvers</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList">PrivateNetworkGatewayPrivateDnsResolversList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.awsCloudConnectionInput">AwsCloudConnectionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.azureCloudConnectionInput">AzureCloudConnectionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.bandwidthTierGigabitsPerSecondInput">BandwidthTierGigabitsPerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.destinationsInput">DestinationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.privateDnsResolversInput">PrivateDnsResolversInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.trafficModeInput">TrafficModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.bandwidthTierGigabitsPerSecond">BandwidthTierGigabitsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.trafficMode">TrafficMode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AwsCloudConnection`<sup>Required</sup> <a name="AwsCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.awsCloudConnection"></a>

```csharp
public PrivateNetworkGatewayAwsCloudConnectionOutputReference AwsCloudConnection { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference">PrivateNetworkGatewayAwsCloudConnectionOutputReference</a>

---

##### `AzureCloudConnection`<sup>Required</sup> <a name="AzureCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.azureCloudConnection"></a>

```csharp
public PrivateNetworkGatewayAzureCloudConnectionOutputReference AzureCloudConnection { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference">PrivateNetworkGatewayAzureCloudConnectionOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.destinations"></a>

```csharp
public PrivateNetworkGatewayDestinationsList Destinations { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList">PrivateNetworkGatewayDestinationsList</a>

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateDnsResolvers`<sup>Required</sup> <a name="PrivateDnsResolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.privateDnsResolvers"></a>

```csharp
public PrivateNetworkGatewayPrivateDnsResolversList PrivateDnsResolvers { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList">PrivateNetworkGatewayPrivateDnsResolversList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AwsCloudConnectionInput`<sup>Optional</sup> <a name="AwsCloudConnectionInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.awsCloudConnectionInput"></a>

```csharp
public IResolvable|PrivateNetworkGatewayAwsCloudConnection AwsCloudConnectionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a>

---

##### `AzureCloudConnectionInput`<sup>Optional</sup> <a name="AzureCloudConnectionInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.azureCloudConnectionInput"></a>

```csharp
public IResolvable|PrivateNetworkGatewayAzureCloudConnection AzureCloudConnectionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a>

---

##### `BandwidthTierGigabitsPerSecondInput`<sup>Optional</sup> <a name="BandwidthTierGigabitsPerSecondInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.bandwidthTierGigabitsPerSecondInput"></a>

```csharp
public double BandwidthTierGigabitsPerSecondInput { get; }
```

- *Type:* double

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.destinationsInput"></a>

```csharp
public IResolvable|PrivateNetworkGatewayDestinations[] DestinationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>[]

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `PrivateDnsResolversInput`<sup>Optional</sup> <a name="PrivateDnsResolversInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.privateDnsResolversInput"></a>

```csharp
public IResolvable|PrivateNetworkGatewayPrivateDnsResolvers[] PrivateDnsResolversInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>[]

---

##### `TrafficModeInput`<sup>Optional</sup> <a name="TrafficModeInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.trafficModeInput"></a>

```csharp
public string TrafficModeInput { get; }
```

- *Type:* string

---

##### `BandwidthTierGigabitsPerSecond`<sup>Required</sup> <a name="BandwidthTierGigabitsPerSecond" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.bandwidthTierGigabitsPerSecond"></a>

```csharp
public double BandwidthTierGigabitsPerSecond { get; }
```

- *Type:* double

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `TrafficMode`<sup>Required</sup> <a name="TrafficMode" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.trafficMode"></a>

```csharp
public string TrafficMode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateNetworkGatewayAwsCloudConnection <a name="PrivateNetworkGatewayAwsCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PrivateNetworkGatewayAwsCloudConnection {
    PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole CrossAccountRole,
    IResolvable|PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets[] GatewaySubnets,
    string[] SecurityGroupIds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.crossAccountRole">CrossAccountRole</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#cross_account_role PrivateNetworkGateway#cross_account_role}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.gatewaySubnets">GatewaySubnets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#gateway_subnets PrivateNetworkGateway#gateway_subnets}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#security_group_ids PrivateNetworkGateway#security_group_ids}. |

---

##### `CrossAccountRole`<sup>Required</sup> <a name="CrossAccountRole" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.crossAccountRole"></a>

```csharp
public PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole CrossAccountRole { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#cross_account_role PrivateNetworkGateway#cross_account_role}.

---

##### `GatewaySubnets`<sup>Required</sup> <a name="GatewaySubnets" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.gatewaySubnets"></a>

```csharp
public IResolvable|PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets[] GatewaySubnets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#gateway_subnets PrivateNetworkGateway#gateway_subnets}.

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#security_group_ids PrivateNetworkGateway#security_group_ids}.

---

### PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole <a name="PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole {
    string RoleArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#role_arn PrivateNetworkGateway#role_arn}. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#role_arn PrivateNetworkGateway#role_arn}.

---

### PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets <a name="PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets {
    string SubnetId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#subnet_id PrivateNetworkGateway#subnet_id}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#subnet_id PrivateNetworkGateway#subnet_id}.

---

### PrivateNetworkGatewayAzureCloudConnection <a name="PrivateNetworkGatewayAzureCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PrivateNetworkGatewayAzureCloudConnection {
    PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet GatewaySubnet
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection.property.gatewaySubnet">GatewaySubnet</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#gateway_subnet PrivateNetworkGateway#gateway_subnet}. |

---

##### `GatewaySubnet`<sup>Required</sup> <a name="GatewaySubnet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection.property.gatewaySubnet"></a>

```csharp
public PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet GatewaySubnet { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#gateway_subnet PrivateNetworkGateway#gateway_subnet}.

---

### PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet <a name="PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet {
    string ResourceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#resource_id PrivateNetworkGateway#resource_id}. |

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#resource_id PrivateNetworkGateway#resource_id}.

---

### PrivateNetworkGatewayConfig <a name="PrivateNetworkGatewayConfig" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PrivateNetworkGatewayConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string Parent,
    string TrafficMode,
    PrivateNetworkGatewayAwsCloudConnection AwsCloudConnection = null,
    PrivateNetworkGatewayAzureCloudConnection AzureCloudConnection = null,
    double BandwidthTierGigabitsPerSecond = null,
    IResolvable|PrivateNetworkGatewayDestinations[] Destinations = null,
    IResolvable|PrivateNetworkGatewayPrivateDnsResolvers[] PrivateDnsResolvers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#display_name PrivateNetworkGateway#display_name}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.parent">Parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#parent PrivateNetworkGateway#parent}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.trafficMode">TrafficMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#traffic_mode PrivateNetworkGateway#traffic_mode}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.awsCloudConnection">AwsCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#aws_cloud_connection PrivateNetworkGateway#aws_cloud_connection}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.azureCloudConnection">AzureCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#azure_cloud_connection PrivateNetworkGateway#azure_cloud_connection}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.bandwidthTierGigabitsPerSecond">BandwidthTierGigabitsPerSecond</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#bandwidth_tier_gigabits_per_second PrivateNetworkGateway#bandwidth_tier_gigabits_per_second}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.destinations">Destinations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#destinations PrivateNetworkGateway#destinations}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.privateDnsResolvers">PrivateDnsResolvers</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#private_dns_resolvers PrivateNetworkGateway#private_dns_resolvers}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#display_name PrivateNetworkGateway#display_name}.

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#parent PrivateNetworkGateway#parent}.

---

##### `TrafficMode`<sup>Required</sup> <a name="TrafficMode" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.trafficMode"></a>

```csharp
public string TrafficMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#traffic_mode PrivateNetworkGateway#traffic_mode}.

---

##### `AwsCloudConnection`<sup>Optional</sup> <a name="AwsCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.awsCloudConnection"></a>

```csharp
public PrivateNetworkGatewayAwsCloudConnection AwsCloudConnection { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#aws_cloud_connection PrivateNetworkGateway#aws_cloud_connection}.

---

##### `AzureCloudConnection`<sup>Optional</sup> <a name="AzureCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.azureCloudConnection"></a>

```csharp
public PrivateNetworkGatewayAzureCloudConnection AzureCloudConnection { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#azure_cloud_connection PrivateNetworkGateway#azure_cloud_connection}.

---

##### `BandwidthTierGigabitsPerSecond`<sup>Optional</sup> <a name="BandwidthTierGigabitsPerSecond" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.bandwidthTierGigabitsPerSecond"></a>

```csharp
public double BandwidthTierGigabitsPerSecond { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#bandwidth_tier_gigabits_per_second PrivateNetworkGateway#bandwidth_tier_gigabits_per_second}.

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.destinations"></a>

```csharp
public IResolvable|PrivateNetworkGatewayDestinations[] Destinations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#destinations PrivateNetworkGateway#destinations}.

---

##### `PrivateDnsResolvers`<sup>Optional</sup> <a name="PrivateDnsResolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.privateDnsResolvers"></a>

```csharp
public IResolvable|PrivateNetworkGatewayPrivateDnsResolvers[] PrivateDnsResolvers { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#private_dns_resolvers PrivateNetworkGateway#private_dns_resolvers}.

---

### PrivateNetworkGatewayDestinations <a name="PrivateNetworkGatewayDestinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PrivateNetworkGatewayDestinations {
    string DestinationType,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations.property.destinationType">DestinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#destination_type PrivateNetworkGateway#destination_type}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#value PrivateNetworkGateway#value}. |

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations.property.destinationType"></a>

```csharp
public string DestinationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#destination_type PrivateNetworkGateway#destination_type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#value PrivateNetworkGateway#value}.

---

### PrivateNetworkGatewayPrivateDnsResolvers <a name="PrivateNetworkGatewayPrivateDnsResolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PrivateNetworkGatewayPrivateDnsResolvers {
    string ResolverType,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers.property.resolverType">ResolverType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#resolver_type PrivateNetworkGateway#resolver_type}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#value PrivateNetworkGateway#value}. |

---

##### `ResolverType`<sup>Required</sup> <a name="ResolverType" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers.property.resolverType"></a>

```csharp
public string ResolverType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#resolver_type PrivateNetworkGateway#resolver_type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#value PrivateNetworkGateway#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference <a name="PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

---


### PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList <a name="PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.get"></a>

```csharp
private PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.internalValue"></a>

```csharp
public IResolvable|PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>[]

---


### PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference <a name="PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>

---


### PrivateNetworkGatewayAwsCloudConnectionOutputReference <a name="PrivateNetworkGatewayAwsCloudConnectionOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PrivateNetworkGatewayAwsCloudConnectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putCrossAccountRole">PutCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putGatewaySubnets">PutGatewaySubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCrossAccountRole` <a name="PutCrossAccountRole" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putCrossAccountRole"></a>

```csharp
private void PutCrossAccountRole(PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putCrossAccountRole.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

---

##### `PutGatewaySubnets` <a name="PutGatewaySubnets" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putGatewaySubnets"></a>

```csharp
private void PutGatewaySubnets(IResolvable|PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putGatewaySubnets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRole">CrossAccountRole</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnets">GatewaySubnets</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRoleInput">CrossAccountRoleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnetsInput">GatewaySubnetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrossAccountRole`<sup>Required</sup> <a name="CrossAccountRole" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRole"></a>

```csharp
public PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference CrossAccountRole { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference</a>

---

##### `GatewaySubnets`<sup>Required</sup> <a name="GatewaySubnets" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnets"></a>

```csharp
public PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList GatewaySubnets { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList</a>

---

##### `CrossAccountRoleInput`<sup>Optional</sup> <a name="CrossAccountRoleInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRoleInput"></a>

```csharp
public IResolvable|PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole CrossAccountRoleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

---

##### `GatewaySubnetsInput`<sup>Optional</sup> <a name="GatewaySubnetsInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnetsInput"></a>

```csharp
public IResolvable|PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets[] GatewaySubnetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>[]

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PrivateNetworkGatewayAwsCloudConnection InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a>

---


### PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference <a name="PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

---


### PrivateNetworkGatewayAzureCloudConnectionOutputReference <a name="PrivateNetworkGatewayAzureCloudConnectionOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PrivateNetworkGatewayAzureCloudConnectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.putGatewaySubnet">PutGatewaySubnet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGatewaySubnet` <a name="PutGatewaySubnet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.putGatewaySubnet"></a>

```csharp
private void PutGatewaySubnet(PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.putGatewaySubnet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnet">GatewaySubnet</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnetInput">GatewaySubnetInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GatewaySubnet`<sup>Required</sup> <a name="GatewaySubnet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnet"></a>

```csharp
public PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference GatewaySubnet { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference</a>

---

##### `GatewaySubnetInput`<sup>Optional</sup> <a name="GatewaySubnetInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnetInput"></a>

```csharp
public IResolvable|PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet GatewaySubnetInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PrivateNetworkGatewayAzureCloudConnection InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a>

---


### PrivateNetworkGatewayDestinationsList <a name="PrivateNetworkGatewayDestinationsList" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PrivateNetworkGatewayDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.get"></a>

```csharp
private PrivateNetworkGatewayDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.internalValue"></a>

```csharp
public IResolvable|PrivateNetworkGatewayDestinations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>[]

---


### PrivateNetworkGatewayDestinationsOutputReference <a name="PrivateNetworkGatewayDestinationsOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PrivateNetworkGatewayDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.destinationType">DestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.destinationTypeInput"></a>

```csharp
public string DestinationTypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.destinationType"></a>

```csharp
public string DestinationType { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PrivateNetworkGatewayDestinations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>

---


### PrivateNetworkGatewayPrivateDnsResolversList <a name="PrivateNetworkGatewayPrivateDnsResolversList" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PrivateNetworkGatewayPrivateDnsResolversList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.get"></a>

```csharp
private PrivateNetworkGatewayPrivateDnsResolversOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.internalValue"></a>

```csharp
public IResolvable|PrivateNetworkGatewayPrivateDnsResolvers[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>[]

---


### PrivateNetworkGatewayPrivateDnsResolversOutputReference <a name="PrivateNetworkGatewayPrivateDnsResolversOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PrivateNetworkGatewayPrivateDnsResolversOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverTypeInput">ResolverTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverType">ResolverType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResolverTypeInput`<sup>Optional</sup> <a name="ResolverTypeInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverTypeInput"></a>

```csharp
public string ResolverTypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ResolverType`<sup>Required</sup> <a name="ResolverType" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverType"></a>

```csharp
public string ResolverType { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PrivateNetworkGatewayPrivateDnsResolvers InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>

---



