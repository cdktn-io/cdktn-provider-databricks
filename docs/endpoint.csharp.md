# `endpoint` Submodule <a name="`endpoint` Submodule" id="@cdktn/provider-databricks.endpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Endpoint <a name="Endpoint" id="@cdktn/provider-databricks.endpoint.Endpoint"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/endpoint databricks_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.endpoint.Endpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new Endpoint(Construct Scope, string Id, EndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig">EndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.endpoint.EndpointConfig">EndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.putAwsVpcEndpointInfo">PutAwsVpcEndpointInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.putAzurePrivateEndpointInfo">PutAzurePrivateEndpointInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.putGcpPscEndpointInfo">PutGcpPscEndpointInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.resetAwsVpcEndpointInfo">ResetAwsVpcEndpointInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.resetAzurePrivateEndpointInfo">ResetAzurePrivateEndpointInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.resetGcpPscEndpointInfo">ResetGcpPscEndpointInfo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.endpoint.Endpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.endpoint.Endpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.endpoint.Endpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.endpoint.Endpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.endpoint.Endpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.endpoint.Endpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.endpoint.Endpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.endpoint.Endpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.endpoint.Endpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.endpoint.Endpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.endpoint.Endpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.endpoint.Endpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.endpoint.Endpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.endpoint.Endpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.endpoint.Endpoint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.endpoint.Endpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.endpoint.Endpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.endpoint.Endpoint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.endpoint.Endpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.endpoint.Endpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.endpoint.Endpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.endpoint.Endpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.endpoint.Endpoint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.endpoint.Endpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.endpoint.Endpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAwsVpcEndpointInfo` <a name="PutAwsVpcEndpointInfo" id="@cdktn/provider-databricks.endpoint.Endpoint.putAwsVpcEndpointInfo"></a>

```csharp
private void PutAwsVpcEndpointInfo(EndpointAwsVpcEndpointInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.endpoint.Endpoint.putAwsVpcEndpointInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfo">EndpointAwsVpcEndpointInfo</a>

---

##### `PutAzurePrivateEndpointInfo` <a name="PutAzurePrivateEndpointInfo" id="@cdktn/provider-databricks.endpoint.Endpoint.putAzurePrivateEndpointInfo"></a>

```csharp
private void PutAzurePrivateEndpointInfo(EndpointAzurePrivateEndpointInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.endpoint.Endpoint.putAzurePrivateEndpointInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo">EndpointAzurePrivateEndpointInfo</a>

---

##### `PutGcpPscEndpointInfo` <a name="PutGcpPscEndpointInfo" id="@cdktn/provider-databricks.endpoint.Endpoint.putGcpPscEndpointInfo"></a>

```csharp
private void PutGcpPscEndpointInfo(EndpointGcpPscEndpointInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.endpoint.Endpoint.putGcpPscEndpointInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo">EndpointGcpPscEndpointInfo</a>

---

##### `ResetAwsVpcEndpointInfo` <a name="ResetAwsVpcEndpointInfo" id="@cdktn/provider-databricks.endpoint.Endpoint.resetAwsVpcEndpointInfo"></a>

```csharp
private void ResetAwsVpcEndpointInfo()
```

##### `ResetAzurePrivateEndpointInfo` <a name="ResetAzurePrivateEndpointInfo" id="@cdktn/provider-databricks.endpoint.Endpoint.resetAzurePrivateEndpointInfo"></a>

```csharp
private void ResetAzurePrivateEndpointInfo()
```

##### `ResetGcpPscEndpointInfo` <a name="ResetGcpPscEndpointInfo" id="@cdktn/provider-databricks.endpoint.Endpoint.resetGcpPscEndpointInfo"></a>

```csharp
private void ResetGcpPscEndpointInfo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Endpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.endpoint.Endpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

Endpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.endpoint.Endpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.endpoint.Endpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

Endpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.endpoint.Endpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.endpoint.Endpoint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

Endpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.endpoint.Endpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.endpoint.Endpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

Endpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Endpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.endpoint.Endpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.endpoint.Endpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Endpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.endpoint.Endpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Endpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.endpoint.Endpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Endpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.awsVpcEndpointInfo">AwsVpcEndpointInfo</a></code> | <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference">EndpointAwsVpcEndpointInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.azurePrivateEndpointInfo">AzurePrivateEndpointInfo</a></code> | <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference">EndpointAzurePrivateEndpointInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.endpointId">EndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.gcpPscEndpointInfo">GcpPscEndpointInfo</a></code> | <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference">EndpointGcpPscEndpointInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.useCase">UseCase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.awsVpcEndpointInfoInput">AwsVpcEndpointInfoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfo">EndpointAwsVpcEndpointInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.azurePrivateEndpointInfoInput">AzurePrivateEndpointInfoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo">EndpointAzurePrivateEndpointInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.gcpPscEndpointInfoInput">GcpPscEndpointInfoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo">EndpointGcpPscEndpointInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.endpoint.Endpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.endpoint.Endpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.endpoint.Endpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.endpoint.Endpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.endpoint.Endpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.endpoint.Endpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.endpoint.Endpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.endpoint.Endpoint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.endpoint.Endpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.endpoint.Endpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.endpoint.Endpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.endpoint.Endpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.endpoint.Endpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.endpoint.Endpoint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-databricks.endpoint.Endpoint.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AwsVpcEndpointInfo`<sup>Required</sup> <a name="AwsVpcEndpointInfo" id="@cdktn/provider-databricks.endpoint.Endpoint.property.awsVpcEndpointInfo"></a>

```csharp
public EndpointAwsVpcEndpointInfoOutputReference AwsVpcEndpointInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference">EndpointAwsVpcEndpointInfoOutputReference</a>

---

##### `AzurePrivateEndpointInfo`<sup>Required</sup> <a name="AzurePrivateEndpointInfo" id="@cdktn/provider-databricks.endpoint.Endpoint.property.azurePrivateEndpointInfo"></a>

```csharp
public EndpointAzurePrivateEndpointInfoOutputReference AzurePrivateEndpointInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference">EndpointAzurePrivateEndpointInfoOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.endpoint.Endpoint.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-databricks.endpoint.Endpoint.property.endpointId"></a>

```csharp
public string EndpointId { get; }
```

- *Type:* string

---

##### `GcpPscEndpointInfo`<sup>Required</sup> <a name="GcpPscEndpointInfo" id="@cdktn/provider-databricks.endpoint.Endpoint.property.gcpPscEndpointInfo"></a>

```csharp
public EndpointGcpPscEndpointInfoOutputReference GcpPscEndpointInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference">EndpointGcpPscEndpointInfoOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.endpoint.Endpoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.endpoint.Endpoint.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `UseCase`<sup>Required</sup> <a name="UseCase" id="@cdktn/provider-databricks.endpoint.Endpoint.property.useCase"></a>

```csharp
public string UseCase { get; }
```

- *Type:* string

---

##### `AwsVpcEndpointInfoInput`<sup>Optional</sup> <a name="AwsVpcEndpointInfoInput" id="@cdktn/provider-databricks.endpoint.Endpoint.property.awsVpcEndpointInfoInput"></a>

```csharp
public IResolvable|EndpointAwsVpcEndpointInfo AwsVpcEndpointInfoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfo">EndpointAwsVpcEndpointInfo</a>

---

##### `AzurePrivateEndpointInfoInput`<sup>Optional</sup> <a name="AzurePrivateEndpointInfoInput" id="@cdktn/provider-databricks.endpoint.Endpoint.property.azurePrivateEndpointInfoInput"></a>

```csharp
public IResolvable|EndpointAzurePrivateEndpointInfo AzurePrivateEndpointInfoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo">EndpointAzurePrivateEndpointInfo</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.endpoint.Endpoint.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `GcpPscEndpointInfoInput`<sup>Optional</sup> <a name="GcpPscEndpointInfoInput" id="@cdktn/provider-databricks.endpoint.Endpoint.property.gcpPscEndpointInfoInput"></a>

```csharp
public IResolvable|EndpointGcpPscEndpointInfo GcpPscEndpointInfoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo">EndpointGcpPscEndpointInfo</a>

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.endpoint.Endpoint.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-databricks.endpoint.Endpoint.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.endpoint.Endpoint.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.endpoint.Endpoint.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-databricks.endpoint.Endpoint.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.endpoint.Endpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EndpointAwsVpcEndpointInfo <a name="EndpointAwsVpcEndpointInfo" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new EndpointAwsVpcEndpointInfo {
    string AwsVpcEndpointId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfo.property.awsVpcEndpointId">AwsVpcEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/endpoint#aws_vpc_endpoint_id Endpoint#aws_vpc_endpoint_id}. |

---

##### `AwsVpcEndpointId`<sup>Required</sup> <a name="AwsVpcEndpointId" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfo.property.awsVpcEndpointId"></a>

```csharp
public string AwsVpcEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/endpoint#aws_vpc_endpoint_id Endpoint#aws_vpc_endpoint_id}.

---

### EndpointAzurePrivateEndpointInfo <a name="EndpointAzurePrivateEndpointInfo" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new EndpointAzurePrivateEndpointInfo {
    string PrivateEndpointName,
    string PrivateEndpointResourceGuid
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo.property.privateEndpointName">PrivateEndpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/endpoint#private_endpoint_name Endpoint#private_endpoint_name}. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo.property.privateEndpointResourceGuid">PrivateEndpointResourceGuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/endpoint#private_endpoint_resource_guid Endpoint#private_endpoint_resource_guid}. |

---

##### `PrivateEndpointName`<sup>Required</sup> <a name="PrivateEndpointName" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo.property.privateEndpointName"></a>

```csharp
public string PrivateEndpointName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/endpoint#private_endpoint_name Endpoint#private_endpoint_name}.

---

##### `PrivateEndpointResourceGuid`<sup>Required</sup> <a name="PrivateEndpointResourceGuid" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo.property.privateEndpointResourceGuid"></a>

```csharp
public string PrivateEndpointResourceGuid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/endpoint#private_endpoint_resource_guid Endpoint#private_endpoint_resource_guid}.

---

### EndpointConfig <a name="EndpointConfig" id="@cdktn/provider-databricks.endpoint.EndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.endpoint.EndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new EndpointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string Parent,
    string Region,
    EndpointAwsVpcEndpointInfo AwsVpcEndpointInfo = null,
    EndpointAzurePrivateEndpointInfo AzurePrivateEndpointInfo = null,
    EndpointGcpPscEndpointInfo GcpPscEndpointInfo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/endpoint#display_name Endpoint#display_name}. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig.property.parent">Parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/endpoint#parent Endpoint#parent}. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/endpoint#region Endpoint#region}. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig.property.awsVpcEndpointInfo">AwsVpcEndpointInfo</a></code> | <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfo">EndpointAwsVpcEndpointInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/endpoint#aws_vpc_endpoint_info Endpoint#aws_vpc_endpoint_info}. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig.property.azurePrivateEndpointInfo">AzurePrivateEndpointInfo</a></code> | <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo">EndpointAzurePrivateEndpointInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/endpoint#azure_private_endpoint_info Endpoint#azure_private_endpoint_info}. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig.property.gcpPscEndpointInfo">GcpPscEndpointInfo</a></code> | <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo">EndpointGcpPscEndpointInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/endpoint#gcp_psc_endpoint_info Endpoint#gcp_psc_endpoint_info}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.endpoint.EndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.endpoint.EndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.endpoint.EndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.endpoint.EndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.endpoint.EndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.endpoint.EndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.endpoint.EndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.endpoint.EndpointConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/endpoint#display_name Endpoint#display_name}.

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.endpoint.EndpointConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/endpoint#parent Endpoint#parent}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-databricks.endpoint.EndpointConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/endpoint#region Endpoint#region}.

---

##### `AwsVpcEndpointInfo`<sup>Optional</sup> <a name="AwsVpcEndpointInfo" id="@cdktn/provider-databricks.endpoint.EndpointConfig.property.awsVpcEndpointInfo"></a>

```csharp
public EndpointAwsVpcEndpointInfo AwsVpcEndpointInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfo">EndpointAwsVpcEndpointInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/endpoint#aws_vpc_endpoint_info Endpoint#aws_vpc_endpoint_info}.

---

##### `AzurePrivateEndpointInfo`<sup>Optional</sup> <a name="AzurePrivateEndpointInfo" id="@cdktn/provider-databricks.endpoint.EndpointConfig.property.azurePrivateEndpointInfo"></a>

```csharp
public EndpointAzurePrivateEndpointInfo AzurePrivateEndpointInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo">EndpointAzurePrivateEndpointInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/endpoint#azure_private_endpoint_info Endpoint#azure_private_endpoint_info}.

---

##### `GcpPscEndpointInfo`<sup>Optional</sup> <a name="GcpPscEndpointInfo" id="@cdktn/provider-databricks.endpoint.EndpointConfig.property.gcpPscEndpointInfo"></a>

```csharp
public EndpointGcpPscEndpointInfo GcpPscEndpointInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo">EndpointGcpPscEndpointInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/endpoint#gcp_psc_endpoint_info Endpoint#gcp_psc_endpoint_info}.

---

### EndpointGcpPscEndpointInfo <a name="EndpointGcpPscEndpointInfo" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new EndpointGcpPscEndpointInfo {
    string EndpointRegion,
    string ProjectId,
    string PscEndpoint
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo.property.endpointRegion">EndpointRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/endpoint#endpoint_region Endpoint#endpoint_region}. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/endpoint#project_id Endpoint#project_id}. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo.property.pscEndpoint">PscEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/endpoint#psc_endpoint Endpoint#psc_endpoint}. |

---

##### `EndpointRegion`<sup>Required</sup> <a name="EndpointRegion" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo.property.endpointRegion"></a>

```csharp
public string EndpointRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/endpoint#endpoint_region Endpoint#endpoint_region}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/endpoint#project_id Endpoint#project_id}.

---

##### `PscEndpoint`<sup>Required</sup> <a name="PscEndpoint" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo.property.pscEndpoint"></a>

```csharp
public string PscEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/endpoint#psc_endpoint Endpoint#psc_endpoint}.

---

## Classes <a name="Classes" id="Classes"></a>

### EndpointAwsVpcEndpointInfoOutputReference <a name="EndpointAwsVpcEndpointInfoOutputReference" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new EndpointAwsVpcEndpointInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.awsEndpointServiceId">AwsEndpointServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.awsVpcEndpointIdInput">AwsVpcEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.awsVpcEndpointId">AwsVpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfo">EndpointAwsVpcEndpointInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `AwsEndpointServiceId`<sup>Required</sup> <a name="AwsEndpointServiceId" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.awsEndpointServiceId"></a>

```csharp
public string AwsEndpointServiceId { get; }
```

- *Type:* string

---

##### `AwsVpcEndpointIdInput`<sup>Optional</sup> <a name="AwsVpcEndpointIdInput" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.awsVpcEndpointIdInput"></a>

```csharp
public string AwsVpcEndpointIdInput { get; }
```

- *Type:* string

---

##### `AwsVpcEndpointId`<sup>Required</sup> <a name="AwsVpcEndpointId" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.awsVpcEndpointId"></a>

```csharp
public string AwsVpcEndpointId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EndpointAwsVpcEndpointInfo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfo">EndpointAwsVpcEndpointInfo</a>

---


### EndpointAzurePrivateEndpointInfoOutputReference <a name="EndpointAzurePrivateEndpointInfoOutputReference" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new EndpointAzurePrivateEndpointInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointResourceId">PrivateEndpointResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.privateLinkServiceId">PrivateLinkServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointNameInput">PrivateEndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointResourceGuidInput">PrivateEndpointResourceGuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointName">PrivateEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointResourceGuid">PrivateEndpointResourceGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo">EndpointAzurePrivateEndpointInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrivateEndpointResourceId`<sup>Required</sup> <a name="PrivateEndpointResourceId" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointResourceId"></a>

```csharp
public string PrivateEndpointResourceId { get; }
```

- *Type:* string

---

##### `PrivateLinkServiceId`<sup>Required</sup> <a name="PrivateLinkServiceId" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.privateLinkServiceId"></a>

```csharp
public string PrivateLinkServiceId { get; }
```

- *Type:* string

---

##### `PrivateEndpointNameInput`<sup>Optional</sup> <a name="PrivateEndpointNameInput" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointNameInput"></a>

```csharp
public string PrivateEndpointNameInput { get; }
```

- *Type:* string

---

##### `PrivateEndpointResourceGuidInput`<sup>Optional</sup> <a name="PrivateEndpointResourceGuidInput" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointResourceGuidInput"></a>

```csharp
public string PrivateEndpointResourceGuidInput { get; }
```

- *Type:* string

---

##### `PrivateEndpointName`<sup>Required</sup> <a name="PrivateEndpointName" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointName"></a>

```csharp
public string PrivateEndpointName { get; }
```

- *Type:* string

---

##### `PrivateEndpointResourceGuid`<sup>Required</sup> <a name="PrivateEndpointResourceGuid" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointResourceGuid"></a>

```csharp
public string PrivateEndpointResourceGuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EndpointAzurePrivateEndpointInfo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo">EndpointAzurePrivateEndpointInfo</a>

---


### EndpointGcpPscEndpointInfoOutputReference <a name="EndpointGcpPscEndpointInfoOutputReference" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new EndpointGcpPscEndpointInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.pscConnectionId">PscConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.serviceAttachmentId">ServiceAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.endpointRegionInput">EndpointRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.pscEndpointInput">PscEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.endpointRegion">EndpointRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.pscEndpoint">PscEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo">EndpointGcpPscEndpointInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.pscConnectionId"></a>

```csharp
public string PscConnectionId { get; }
```

- *Type:* string

---

##### `ServiceAttachmentId`<sup>Required</sup> <a name="ServiceAttachmentId" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.serviceAttachmentId"></a>

```csharp
public string ServiceAttachmentId { get; }
```

- *Type:* string

---

##### `EndpointRegionInput`<sup>Optional</sup> <a name="EndpointRegionInput" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.endpointRegionInput"></a>

```csharp
public string EndpointRegionInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `PscEndpointInput`<sup>Optional</sup> <a name="PscEndpointInput" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.pscEndpointInput"></a>

```csharp
public string PscEndpointInput { get; }
```

- *Type:* string

---

##### `EndpointRegion`<sup>Required</sup> <a name="EndpointRegion" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.endpointRegion"></a>

```csharp
public string EndpointRegion { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `PscEndpoint`<sup>Required</sup> <a name="PscEndpoint" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.pscEndpoint"></a>

```csharp
public string PscEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EndpointGcpPscEndpointInfo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo">EndpointGcpPscEndpointInfo</a>

---



